import React, { useState, useEffect, lazy, Suspense } from 'react';
import { CheckCircle, X, CreditCard, ChevronLeft, Bell, Search, Clock, FileText, Database, Zap, Shield, ArrowRight, AlertCircle  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
    getSubscriptionPlans, 
    getCurrentSubscription, 
    changeSubscriptionPlan 
  } from '../api/subscriptionService';
import axios from "axios";
import { getUserData } from '../api/auth';
const Header = lazy(() => import('./Header'));
import PaymentModeSelector from './PaymentModeSelector';
import Footer from './Footer';

const isSubscriptionNearExpiryAndManual = (subscription, daysThreshold = 7) => {
    if (!subscription || subscription.status !== 'active' || subscription.paymentMode !== 'manual' || !subscription.endDate) {
        return { nearExpiry: false, daysLeft: null };
    }
    const endDate = new Date(subscription.endDate);
    const now = new Date();
    
    // Compare dates only, ignoring time part for day calculation
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const expiryDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

    const diffTime = expiryDay.getTime() - today.getTime();
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return {
        nearExpiry: daysLeft >= 0 && daysLeft <= daysThreshold,
        daysLeft: daysLeft
    };
};


const SubscriptionDetails = () => {
    const email = localStorage.getItem('userEmail');
    const userId = localStorage.getItem('userId')
    const [currentPlan, setCurrentPlan] = useState('free');
    const [selectedPlan, setSelectedPlan] = useState('free'); 
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [paymentMode, setPaymentMode] = useState('automatic');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showUpgradeConfirmation, setShowUpgradeConfirmation] = useState(false);
    const [planPrices, setPlanPrices] = useState({
        free: { monthly: 0, annual: 0 },
        basic: { monthly: 299, annual: 1999 },
        premium: { monthly: 499, annual: 2999 }
    });
    const [planFeatures, setPlanFeatures] = useState({});
    const [loading, setLoading] = useState(true);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [error, setError] = useState(null);
    const [paymentError, setPaymentError] = useState(null);
    const [showCancelPendingPayment, setShowCancelPendingPayment] = useState(false);
    const [currentTransactionId, setCurrentTransactionId] = useState(null); 
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [isRenewalFlow, setIsRenewalFlow] = useState(false);

    const handlePayment = async () => {
        try {
            setPaymentLoading(true);
            setPaymentError(null);
            
            // Create subscription through backend API
            const { data } = await axios.post("/api/transaction/create-subscription", { 
                plan: selectedPlan,
                billingCycle: billingCycle,
                userId: userId,
                paymentMode,
            });
            console.log(data);
    
            setCurrentTransactionId(data.transactionId);
            console.log(currentTransactionId);
    
            
            const subscription = data.subscription;
            console.log(paymentMode)

            if (paymentMode === 'automatic') {
               
                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                    subscription_id: subscription.id,
                    name: "ShariaStock",
                    description: `${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan - ${billingCycle}`,
                    handler: async function(response) {
                        try {
                            // Verify subscription payment on backend
                            const verificationResponse = await axios.post("/api/transaction/verify-subscription", {
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_subscription_id: response.razorpay_subscription_id,
                                razorpay_signature: response.razorpay_signature,
                                save_payment_method: true // Subscriptions typically save payment methods for recurring billing
                            });
                            
                            if (verificationResponse.data.status === 'success') {
                                // Update local state with new subscription info
                                setCurrentPlan(selectedPlan);
                                setUser({
                                    ...user,
                                    subscription: verificationResponse.data.user.subscription
                                });
                                
                                setShowConfirmation(false);
                                setShowSuccessModal(true);
                            } else {
                                setPaymentError("Payment verification failed. Please contact support.");
                            }
                        } catch (error) {
                            setPaymentError(`Verification error: ${error.response?.data?.message || error.message}`);
                        }
                    },
                    prefill: {
                        name: user.name || "",
                        email: user.email || "",
                        contact: user.phone || ""
                    },
                    theme: { color: "#528FF0" },
                    modal: {
                        ondismiss: function() {
                            setPaymentLoading(false);
                        }
                    },
                    notes: {
                        plan: selectedPlan,
                        billingCycle: billingCycle,
                        userId: userId,
                        paymentMode
                    }
                };
                const razorpay = new window.Razorpay(options);
                razorpay.on('payment.failed', function(response) {
                    setPaymentError(`Payment failed: ${response.error.description}`);
                    setPaymentLoading(false);
                });
                
                razorpay.open();
              } else {
                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                    amount: data.order.amount,
                    currency: data.order.currency || "INR",
                    name: "ShariaStock",
                    description: `${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan - ${billingCycle}`,
                    order_id: data.order.id,
                    handler: async function(response) {
                        try {
                            // Verify payment on backend
                            const verificationResponse = await axios.post("/api/transaction/verify-order", response);
                            
                            if (verificationResponse.data.status === 'success') {
                                // Update local state with new subscription info
                                setCurrentPlan(selectedPlan);
                                setUser({
                                    ...user,
                                    subscription: verificationResponse.data.user.subscription
                                });
                                
                                setShowConfirmation(false);
                                setShowSuccessModal(true);
                            } else {
                                setPaymentError("Payment verification failed. Please contact support.");
                            }
                        } catch (error) {
                            setPaymentError(`Verification error: ${error.response?.data?.message || error.message}`);
                        }
                    },
                    prefill: {
                        name: user.name || "",
                        email: user.email || "",
                        contact: user.phone || ""
                    },
                    theme: { color: "#528FF0" },
                    modal: {
                        ondismiss: function() {
                            setPaymentLoading(false);
                        }
                    }
              }
              const razorpay = new window.Razorpay(options);
              razorpay.on('payment.failed', function(response) {
                  setPaymentError(`Payment failed: ${response.error.description}`);
                  setPaymentLoading(false);
              });
              
              razorpay.open();
            }
        } catch (error) {
            setPaymentLoading(false);
            console.log(error.response)
            if (error.response?.data?.error=='There is already a pending payment for this plan') {
                setPaymentError("You already have a pending subscription for this plan. Please complete or cancel that subscription first.");
                setShowCancelPendingPayment(true);
            } else {
                setPaymentError(`Subscription initialization error: ${error.response?.data?.error || error.message}`);
            }
        }
    };

  
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const userData = await getUserData(email);
                setUser(userData);
                // Get subscription plans
                const plansData = await getSubscriptionPlans();
                setPlanPrices(plansData.planPrices);
                setPlanFeatures(plansData.planFeatures);
                
                // Get current user subscription
                const userSubscription = userData.subscription;
                if (userSubscription && userSubscription.plan) {
                    setCurrentPlan(userSubscription.plan)
                    setSelectedPlan(userSubscription.plan);
                    setBillingCycle(userSubscription.billingCycle || 'monthly');
                }
            } catch (err) {
                setError('Failed to load subscription data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
        // if (email && userId) { // Ensure email and userId are available
        //     fetchData();
        // } else {
        //     setError("User session not found. Please log in again.");
        //     setLoading(false);
        //     // navigate('/login'); // Optionally redirect to login
        // }
    }, []);

    

    const handleCancelPendingPayment = async () => {
        setPaymentLoading(true);
        setPaymentError(null);
        setShowCancelPendingPayment(false);

        try {
            await axios.post("/api/transaction/cancel-pending-subscription", {
                userId: userId,
                plan: selectedPlan,
                billingCycle: billingCycle
            });

            setPaymentError("Pending payment cancelled successfully. Try to create new order");
            setTimeout(() => {
                setShowConfirmation(false);
                setPaymentError(null)
            }, 2000);
            

        } catch (cancelError) {
            setPaymentError(`Failed to cancel pending payment: ${cancelError.response?.data?.message || cancelError.message}`);
            setShowCancelPendingPayment(true); 
        } finally {
            setPaymentLoading(false);
        }
    };
   
    const getPlanPrice = (plan) => {
        return planPrices[plan]?.[billingCycle] || 0;
    };

    
    const getTax = (price) => {
        return price * 0.18;
    };

    
    const getTotalPrice = (plan) => {
        const price = getPlanPrice(plan);
        const tax = getTax(price);
        return price + tax;
    };

   
    const getPlanFeatures = (plan) => {
        return planFeatures[plan] || []; 
    };

    const isDowngrade = (planToCheck) => {
        const planValues = { 'free': 0, 'basic': 1, 'premium': 2 };
        return planValues[planToCheck] < planValues[currentPlan];
    };

    const handlePlanSelect = (plan, options = {}) => {
        const { isRenewal = false } = options;
        setIsRenewalFlow(isRenewal);

        if (isRenewal) {
            setSelectedPlan(plan); // plan is currentPlan
            if (user.subscription) {
                setBillingCycle(user.subscription.billingCycle || 'monthly');
                // Default payment mode for renewal could be existing, or allow user to pick in modal
                // The PaymentModeSelector will handle the choice, this sets its initial state.
                setPaymentMode(user.subscription.paymentMode || 'manual'); 
            }
            setShowConfirmation(true);
            return;
        }

        if (currentPlan === 'premium' && plan !== 'premium') {
            alert("You're currently on our Premium plan. Please contact customer support if you wish to downgrade.");
            return;
        }
        if (currentPlan === 'basic' && plan === 'free') {
            alert("You're currently on our Basic plan. Please contact customer support if you wish to downgrade to Free.");
            return;
        }
        setSelectedPlan(plan);

        if (currentPlan === 'basic' && plan === 'premium') {
            setShowUpgradeConfirmation(true);
            return;
        }

        if (plan !== currentPlan && plan !== 'free') {
            setShowConfirmation(true);
        }
    };

   
    const handleUpgrade = () => {
        if (currentPlan === 'premium') {
            alert("You're already on our Premium plan.");
            return;
        }
        
        setSelectedPlan('premium');
        
        if (currentPlan === 'basic') {
            setShowUpgradeConfirmation(true);
        } else {
            setShowConfirmation(true);
        }
    };

    const handleConfirmationClose = () => {
        setShowConfirmation(false);
        setPaymentError(null);
        setIsRenewalFlow(false);
    };

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
    };
    
    const handleUpgradeConfirmationClose = () => {
        setShowUpgradeConfirmation(false);
    };
    
    const handleConfirmUpgrade = () => {
        setShowUpgradeConfirmation(false);
        setShowConfirmation(true);
    };

    const handleSubscribe = async () => {
        if (selectedPlan === currentPlan) {
            alert("You are already subscribed to this plan.");
            return;
        }

        if (isDowngrade(selectedPlan)) {
            alert("Please contact customer support to downgrade your subscription.");
            return;
        }
        
        setShowConfirmation(true);
    };

    if (loading) {
        return <div className="p-12 text-center" data-testid="loading-state">Loading subscription plans...</div>;
    }

    if (error) {
        return <div className="p-12 text-center text-red-500" data-testid="error-state">{error}</div>;
    }

    const renewalInfo = isSubscriptionNearExpiryAndManual(user?.subscription, 7);

    const cancelSubscription = async () => {
        try {
            setLoading(true);
            
            const response = await axios.post('/api/transaction/cancel-subscription', {
                userId: userId,
                subscriptionId: user.subscription.subscriptionId
            });
            
            if (response.data.status === 'success') {
                // Update user state
                setUser({
                    ...user,
                    subscription: {
                        ...user.subscription,
                        autoRenew: false,
                        status: 'cancelling' // Will be marked inactive once the current period ends
                    }
                });
                setShowCancellationSuccess(true);
            }
        } catch (error) {
            setError(`Failed to cancel subscription: ${error.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    // Reactivate a cancelled subscription (if allowed by Razorpay and before period ends)
    const reactivateSubscription = async () => {
        try {
            setLoading(true);
            
            const response = await axios.post('/api/transaction/reactivate-subscription', {
                userId: userId,
                subscriptionId: user.subscription.subscriptionId
            });
            
            if (response.data.status === 'success') {
                setUser({
                    ...user,
                    subscription: {
                        ...user.subscription,
                        autoRenew: true,
                        status: 'active'
                    }
                });
                setShowReactivationSuccess(true);
            }
        } catch (error) {
            setError(`Failed to reactivate subscription: ${error.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    };
    console.log(paymentMode)

    return (
        <div className="min-h-screen font-sans text-slate-900" data-testid="subscription-details-container">
            <Suspense fallback={<div data-testid="header-loading">Loading...</div>}>
           <Header />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12" data-testid="subscription-main-content">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2" data-testid="page-title">Choose your plan</h2>
                    <p className="text-slate-600 max-w-2xl" data-testid="page-description">Select the perfect plan to enhance your Islamic investment journey. All plans come with Shariah compliance verification.</p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-12" data-testid="billing-toggle-container">
                    <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-slate-200">
                        <button
                            data-testid="monthly-billing-button"
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            onClick={() => setBillingCycle('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            data-testid="annual-billing-button"
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                                }`}
                            onClick={() => setBillingCycle('annual')}
                        >
                            Annual 
                        </button>
                    </div>
                </div>

                {/* Plan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-testid="plan-cards-container">
                    {/* Free Plan */}
                    <div
                        data-testid="free-plan-card"
                        className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${selectedPlan === 'free'
                            ? 'ring-2 ring-purple-500 shadow-lg transform scale-[1.02]'
                            : 'border border-slate-200 shadow-sm hover:shadow-md'
                            } ${
                                (currentPlan === 'basic' || currentPlan === 'premium') ? 'opacity-50' : ''
                            }`}
                    >
                        <div className={`h-2 ${selectedPlan === 'free' ? 'bg-purple-500' : 'bg-slate-200'}`}></div>
                        <div className="p-8">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2" data-testid="free-plan-title">Free</h3>
                                <p className="text-slate-600 text-sm" data-testid="free-plan-description">Basic features for starting investors</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-end">
                                    <p className="text-4xl font-bold" data-testid="free-plan-price">₹{getPlanPrice('free').toFixed(0)}</p>
                                    <p className="text-slate-500 ml-2 mb-1" data-testid="free-plan-billing-period">/forever</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-8" data-testid="free-plan-features">
                                {planFeatures.free && planFeatures.free.map((feature, index) => (
                                    <div key={index} className="flex items-start" data-testid={`free-plan-feature-${index}`}>
                                        {feature.includes('No ') ? (
                                            <X size={18} className="text-slate-300 mt-0.5 mr-3 flex-shrink-0" />
                                        ) : (
                                            <CheckCircle size={18} className="text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                                        )}
                                        <span className={feature.includes('No ') ? "text-slate-400" : "text-slate-700"}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <button
                                data-testid="select-free-plan-button"
                                onClick={() => handlePlanSelect('free')}
                                className={`w-full py-3 rounded-xl font-medium transition-all ${selectedPlan === 'free'
                                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                                    : 'bg-white border border-slate-300 text-slate-600 hover:border-purple-500 hover:text-purple-500'
                                    }`}
                                    disabled={currentPlan === 'basic' || currentPlan === 'premium'}
                            >
                                {currentPlan === 'free' ? 'Current Plan' : (currentPlan === 'basic' || currentPlan === 'premium') ? 'Contact Support to Downgrade' : 'Select Plan'}
                            </button>
                        </div>
                    </div>

                    {/* Basic Plan */}
                    {['basic', 'premium'].map(planType => {
                        const isCurrentActivePlan = currentPlan === planType && user?.subscription?.status === 'active';
                        const showRenewalOption = isCurrentActivePlan && renewalInfo.nearExpiry && user.subscription.plan === planType;
                        
                        let buttonText;
                        let buttonOnClickHandler;
                        let buttonIsDisabled = false;
                        let notice = null;

                        if (showRenewalOption) {
                            buttonText = "Renew Now";
                            buttonOnClickHandler = () => handlePlanSelect(planType, { isRenewal: true });
                            notice = (
                                <p className="text-sm text-orange-500 bg-orange-50 border border-orange-200 p-2 rounded-md mb-3 text-center" data-testid={`${planType}-renewal-notice`}>
                                    <AlertCircle size={16} className="inline mr-1 mb-0.5" />
                                    Expires in {renewalInfo.daysLeft} day{renewalInfo.daysLeft === 1 ? '' : 's'}.
                                </p>
                            );
                        } else if (isCurrentActivePlan) {
                            buttonText = "Current Plan";
                            buttonIsDisabled = true;
                        } else {
                            if (planType === 'basic') {
                                if (currentPlan === 'premium') {
                                    buttonText = "Contact Support to Downgrade";
                                    buttonIsDisabled = true;
                                } else {
                                    buttonText = "Select Plan";
                                    buttonOnClickHandler = () => handlePlanSelect('basic');
                                }
                            } else if (planType === 'premium') {
                                buttonText = currentPlan === 'basic' ? "Upgrade Plan" : "Select Plan";
                                buttonOnClickHandler = () => handlePlanSelect('premium');
                            }
                        }
                        // General disable for higher plans if lower plan is current
                        if (planType === 'basic' && currentPlan === 'premium') buttonIsDisabled = true;


                        return (
                            <div
                                key={planType}
                                data-testid={`${planType}-plan-card`}
                                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${selectedPlan === planType ? 'ring-2 ring-purple-500 shadow-lg transform scale-[1.02]' : 'border border-slate-200 shadow-sm hover:shadow-md'} ${ (planType === 'basic' && currentPlan === 'premium') ? 'opacity-50' : '' } ${planType === 'premium' ? 'bg-gradient-to-br from-purple-50 to-indigo-50 relative' : ''}`}
                            >
                                {planType === 'premium' && (
                                     <div className="absolute top-0 right-0">
                                        <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white text-xs px-6 py-1 font-medium transform rotate-45 translate-x-6 translate-y-3 shadow-sm">Popular</div>
                                    </div>
                                )}
                                <div className={`h-2 ${selectedPlan === planType ? 'bg-purple-500' : (planType === 'premium' ? 'bg-indigo-300' : 'bg-slate-200')}`}></div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{planType.charAt(0).toUpperCase() + planType.slice(1)}</h3>
                                    <p className="text-slate-600 text-sm">
                                        {planType === 'basic' ? 'Essential features for active investors' : 'Advanced features for serious investors'}
                                    </p>
                                    <div className="mb-6 mt-6">
                                        <div className="flex items-end">
                                            <p className="text-4xl font-bold" data-testid={`${planType}-plan-price`}>₹{getPlanPrice(planType).toFixed(0)}</p>
                                            <p className="text-slate-500 ml-2 mb-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mb-8">
                                        {planFeatures[planType]?.map((feature, index) => (
                                            <div key={index} className="flex items-start">
                                                <CheckCircle size={18} className="text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                                                <span className="text-slate-700">{feature}</span>
                                            </div>
                                        )) || <p>Features not available.</p>}
                                    </div>
                                    {notice}
                                    <button
                                        data-testid={`select-${planType}-plan-button`}
                                        onClick={buttonOnClickHandler}
                                        disabled={buttonIsDisabled}
                                        className={`w-full py-3 rounded-xl font-medium transition-all 
                                            ${selectedPlan === planType && !showRenewalOption // Don't make current plan purple if it's not a renewal button
                                                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                                                : (planType === 'premium' && !buttonIsDisabled // Premium default button style
                                                    ? 'bg-purple-600 bg-opacity-90 text-white hover:bg-opacity-100'
                                                    : 'bg-purple-600 text-white hover:bg-purple-700'
                                                )}
                                            ${buttonIsDisabled ? 'opacity-60 cursor-not-allowed' : ''}
                                            ${showRenewalOption ? 'bg-purple-600 text-white hover:bg-purple-600' : ''} 
                                        `}
                                    >
                                        {buttonText}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

               {/* Features Comparison */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-16" data-testid="plan-comparison-container">
                    <div className="p-8 pb-0">
                        <h3 className="text-xl font-bold text-slate-900 mb-2" data-testid="comparison-title">Plan Comparison</h3>
                        <p className="text-slate-600 mb-6" data-testid="comparison-description">Compare features across all plans to find the best fit for your needs</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full" data-testid="plan-comparison-table">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="p-8 text-left font-medium text-slate-600 w-1/3" data-testid="table-header-feature">Feature</th>
                                    <th className="p-8 text-center font-medium text-slate-600" data-testid="table-header-free">Free</th>
                                    <th className="p-8 text-center font-medium text-slate-600" data-testid="table-header-basic">Basic</th>
                                    <th className="p-8 text-center font-medium text-slate-600" data-testid="table-header-premium">Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-100" data-testid="feature-row-search">
                                    <td className="px-8 py-6 text-slate-800 flex items-center">
                                        <Search size={16} className="mr-3 text-purple-300" />
                                        Stock search limit
                                    </td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="free-search-limit">3 stocks</td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="basic-search-limit">Unlimited</td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="premium-search-limit">Unlimited</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50" data-testid="feature-row-storage">
                                    <td className="px-8 py-6 text-slate-800 flex items-center">
                                        <Database size={16} className="mr-3 text-purple-300" />
                                        Stock storage
                                    </td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="free-storage">—</td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="basic-storage">10 stocks</td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="premium-storage">25 stocks</td>
                                </tr>
                                <tr className="border-b border-slate-100" data-testid="feature-row-notifications">
                                    <td className="px-8 py-6 text-slate-800 flex items-center">
                                        <Bell size={16} className="mr-3 text-purple-300" />
                                        News notifications
                                    </td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="free-notifications">—</td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="basic-notifications">Basic</td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="premium-notifications">Priority</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50" data-testid="feature-row-compliance">
                                    <td className="px-8 py-6 text-slate-800 flex items-center">
                                        <Shield size={16} className="mr-3 text-purple-300" />
                                        Shariah compliance details
                                    </td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="free-compliance">Basic</td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="basic-compliance">Detailed</td>
                                    <td className="px-8 py-6 text-center text-slate-800" data-testid="premium-compliance">Expert</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>

{/* Bottom CTA */}
<div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden" data-testid="cta-container">
    <div className="p-12 flex flex-col md:flex-row md:items-center justify-between text-white">
        <div className="mb-8 md:mb-0 md:mr-8 max-w-xl">
            <h3 className="text-2xl font-bold mb-4" data-testid="cta-heading">Ready to enhance your Islamic investment journey?</h3>
            <p className="text-purple-100 text-lg" data-testid="cta-description">Get started with our Basic or Premium plan today and make more informed, Shariah-compliant investment decisions.</p>
        </div>
        <button
            onClick={handleUpgrade}
            className={`px-8 py-4 bg-white text-purple-600 rounded-xl font-medium hover:bg-purple-50 flex items-center justify-center flex-shrink-0 shadow-lg transition-all transform hover:scale-105 ${
                currentPlan === 'premium' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentPlan === 'premium'}
            data-testid="upgrade-button"
        >
            {currentPlan === 'premium' ? 'You Have Premium' : 'Upgrade Now'}
            <ArrowRight size={18} className="ml-2" />
        </button>
    </div>
</div>
</main>
{showSuccessModal && (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4" data-testid="success-modal">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 transform transition-all">
            <div className="flex justify-end">
                <button onClick={handleSuccessModalClose} className="text-slate-400 hover:text-slate-600" data-testid="success-modal-close">
                    <X size={20} />
                </button>
            </div>
            <div className="flex flex-col items-center justify-center text-center mb-6">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-4" data-testid="success-icon-container">
                    <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2" data-testid="success-title">Payment Successful!</h3>
                <p className="text-slate-600" data-testid="success-message">
                    Your subscription has been updated to the {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan.
                    You now have access to all {selectedPlan} features.
                </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 flex items-start rounded-r-md mb-6" data-testid="success-info-banner">
                <div className="text-purple-500 mr-3 flex-shrink-0 mt-0.5">
                    <Bell size={18} />
                </div>
                <p className="text-sm text-purple-700">
                    Your subscription will automatically renew each {billingCycle}. You can manage your subscription anytime from your account settings.
                </p>
            </div>
            <button
                onClick={handleSuccessModalClose}
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 flex items-center justify-center"
                data-testid="success-modal-confirm"
            >
                Got it, thanks!
            </button>
        </div>
    </div>
)}


{showUpgradeConfirmation && (
<div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4" data-testid="upgrade-confirmation-modal">
    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 transform transition-all">
    <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold text-slate-900" data-testid="upgrade-confirmation-title">Upgrade Confirmation</h3>
        <button onClick={handleUpgradeConfirmationClose} className="text-slate-400 hover:text-slate-600" data-testid="upgrade-confirmation-close">
        <X size={20} />
        </button>
    </div>
    
    <div className="mb-8">
        <p className="text-slate-700 mb-4" data-testid="upgrade-confirmation-message">
        You are currently subscribed to the <span className="font-medium capitalize">{currentPlan}</span> plan.
        Are you sure you want to upgrade to the <span className="font-medium capitalize">{selectedPlan}</span> plan?
        </p>
        
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 flex items-start rounded-r-md" data-testid="upgrade-confirmation-info">
        <div className="text-purple-500 mr-3 flex-shrink-0 mt-0.5">ℹ️</div>
        <p className="text-sm text-purple-700">
            Your current billing cycle will be canceled and you'll be charged the full amount for the new plan immediately.
        </p>
        </div>
    </div>
    
    <div className="flex flex-col space-y-3">
        <button
        onClick={handleConfirmUpgrade}
        className="px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 flex items-center justify-center"
        data-testid="confirm-upgrade-button"
        >
        Confirm Upgrade
        </button>
        <button
        onClick={handleUpgradeConfirmationClose}
        className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50"
        data-testid="cancel-upgrade-button"
        >
        Cancel
        </button>
    </div>
    </div>
</div>
)}

{/* Confirmation Modal */}
                {showConfirmation && (
                    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-hidden" data-testid="subscription-confirmation-modal">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] flex flex-col">
                      <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-100 sticky top-0 bg-white z-10 rounded-t-2xl">
                        <h3 className="text-xl font-bold text-slate-900" data-testid="subscription-confirmation-title">
                            {isRenewalFlow ? "Confirm Renewal" : "Confirm Subscription"}
                        </h3>
                        <button onClick={handleConfirmationClose} className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100" aria-label="Close" data-testid="subscription-confirmation-close">
                          <X size={20} />
                        </button>
                      </div>
                      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                        <div className="mb-6">
                          <p className="text-slate-700 mb-4" data-testid="subscription-details">
                            {isRenewalFlow ? (
                                <>You're about to renew your <span className="font-medium">{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</span> plan</>
                            ) : (
                                <>You're about to subscribe to the <span className="font-medium">{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</span> plan</>
                            )}
                             {' '}at <span className="font-medium">₹{getPlanPrice(selectedPlan).toFixed(0)}</span> per {billingCycle}.
                          </p>
                          {paymentError && (
                            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-4">
                              <div className="flex flex-col sm:flex-row sm:items-start">
                                <div className="text-red-500 mr-3 flex-shrink-0 mt-0.5">⚠️</div>
                                <div className="flex-1">
                                  <p className="text-sm text-red-700" data-testid="payment-error-message">{paymentError}</p>
                                  {showCancelPendingPayment && (
                                    <button className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 text-sm" onClick={handleCancelPendingPayment} disabled={paymentLoading} data-testid="cancel-pending-payment-button">
                                      Cancel Pending Payment
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                            <div className="flex items-start">
                              <div className="text-purple-500 mr-3 flex-shrink-0 mt-0.5">ℹ️</div>
                              <p className="text-sm text-purple-700">
                                Your card will be charged, and your subscription will {paymentMode === 'automatic' ? 'renew automatically' : 'be active for the selected period'}.
                                {paymentMode === 'automatic' && ' You can cancel anytime.'}
                              </p>
                            </div>
                          </div>
                        </div>
                        <PaymentModeSelector 
                          selected={paymentMode}
                          onChange={setPaymentMode}
                        />
                        <div className="border-t border-slate-100 pt-6 mt-6">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-slate-600">Subtotal</span>
                            <span className="font-medium" data-testid="subtotal-price">₹{getPlanPrice(selectedPlan).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-slate-600">Tax (18% GST)</span>
                            <span className="font-medium">₹{getTax(getPlanPrice(selectedPlan)).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between items-center font-bold border-t border-slate-100 pt-4 mt-4">
                            <span>Total</span>
                            <span className="text-xl">₹{getTotalPrice(selectedPlan).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 border-t border-slate-100 sticky bottom-0 bg-white z-10 rounded-b-2xl">
                        <div className="flex flex-col space-y-3">
                          <button onClick={handlePayment} disabled={paymentLoading} className={`px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 flex items-center justify-center transition ${paymentLoading ? 'opacity-70 cursor-not-allowed' : ''}`} data-testid="confirm-payment-button"> 
                            {paymentLoading ? (
                              <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Processing...</>
                            ) : (
                              <><CreditCard size={18} className="mr-2" />Confirm Payment</>
                            )}
                          </button>
                          <button onClick={handleConfirmationClose} className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition" disabled={paymentLoading} data-testid="cancel-payment-button">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <Footer />
            </Suspense>
        </div>
    );
};

export default SubscriptionDetails;