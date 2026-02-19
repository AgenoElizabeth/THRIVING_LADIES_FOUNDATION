"use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Image from "next/image"
// import Link from "next/link"
// import {
//   Heart,
//   CreditCard,
//   Shield,
//   Users,
//   TrendingUp,
//   ArrowRight,
//   Star,
//   CheckCircle,
//   Calendar,
//   Target,
//   Award,
//   Globe,
//   Sparkles,
//   Zap,
//   Eye,
//   Play,
//   BookOpen,
//   Lightbulb,
//   Trophy,
//   Rocket,
//   Share,
//   Download,
//   Clock,
//   Building,
//   MessageCircle,
//   HandHeart,
//   Briefcase,
//   DollarSign,
//   Gift,
//   Repeat,
//   PiggyBank,
//   Banknote,
//   Smartphone,
//   Landmark
// } from "lucide-react"

// export default function DonatePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 px-4 md:px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3">
//                   <Heart className="h-5 w-5 text-accent animate-pulse" />
//                   <span className="text-sm font-bold text-accent">Make a Difference</span>
//                 </div>
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
//                   Your Support{" "}
//                   <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
//                     Changes Lives
//                   </span>
//                 </h1>
//                 <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground max-w-2xl">
//                   Every donation, no matter the size, helps us empower more women, girls and youths across Uganda. 
//                   Join our mission to create lasting change in communities that need it most.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <div className="text-2xl md:text-3xl font-bold text-primary">$25</div>
//                   <div className="text-sm text-muted-foreground">Provides hygiene kits for 5 girls</div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-2xl md:text-3xl font-bold text-secondary">$100</div>
//                   <div className="text-sm text-muted-foreground">Sponsors a girl's education for 1 month</div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-2xl md:text-3xl font-bold text-accent">$500</div>
//                   <div className="text-sm text-muted-foreground">Builds a handwashing station</div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-2xl md:text-3xl font-bold text-primary">$1,000</div>
//                   <div className="text-sm text-muted-foreground">Funds a complete school program</div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
//                   <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                   Donate Now
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button variant="outline" size="lg" className="border-2 border-primary/30 text-primary hover:bg-primary/10 group">
//                   <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                   See Impact
//                 </Button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="Students celebrating success"
//                   width={600}
//                   height={500}
//                   className="object-cover w-full h-[400px] md:h-[500px]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
//                 {/* Impact Badge */}
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
//                     <div className="text-center">
//                       <div className="text-2xl font-bold text-primary mb-1">98%</div>
//                       <div className="text-sm text-muted-foreground">of donations go directly to programs</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Trust Indicators */}
//               <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
//                 <div className="flex items-center gap-2">
//                   <Shield className="h-6 w-6 text-green-600" />
//                   <div className="text-sm font-semibold text-foreground">Secure & Trusted</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Donation Options */}
//       <section className="py-16 md:py-24 px-4 md:px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3 mb-6">
//               <Gift className="h-5 w-5 text-accent animate-pulse" />
//               <span className="text-sm font-bold text-accent">Choose Your Impact</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Ways to Give</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Choose the donation method that works best for you. Every contribution makes a real difference.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* One-Time Donation */}
//             <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <CardHeader className="relative z-10 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <Heart className="h-8 w-8 text-white" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">One-Time Gift</CardTitle>
//                 <CardDescription className="text-muted-foreground">Make an immediate impact with a single donation</CardDescription>
//               </CardHeader>
//               <CardContent className="relative z-10 space-y-6">
//                 <div className="grid grid-cols-2 gap-3">
//                   {["$25", "$50", "$100", "$250"].map((amount) => (
//                     <Button key={amount} variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
//                       {amount}
//                     </Button>
//                   ))}
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="customAmount" className="text-sm font-medium">Custom Amount</Label>
//                   <div className="relative">
//                     <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                     <Input 
//                       id="customAmount" 
//                       placeholder="Enter amount"
//                       className="pl-10 border-2 focus:border-primary transition-colors"
//                     />
//                   </div>
//                 </div>
//                 <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white group">
//                   <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                   Donate Now
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Monthly Giving */}
//             <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ring-2 ring-accent/20">
//               <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
//                 Most Popular
//               </div>
//               <CardHeader className="relative z-10 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <Repeat className="h-8 w-8 text-white" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">Monthly Giving</CardTitle>
//                 <CardDescription className="text-muted-foreground">Provide sustainable support with recurring donations</CardDescription>
//               </CardHeader>
//               <CardContent className="relative z-10 space-y-6">
//                 <div className="grid grid-cols-2 gap-3">
//                   {["$10/mo", "$25/mo", "$50/mo", "$100/mo"].map((amount) => (
//                     <Button key={amount} variant="outline" className="border-2 border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all">
//                       {amount}
//                     </Button>
//                   ))}
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="monthlyAmount" className="text-sm font-medium">Custom Monthly Amount</Label>
//                   <div className="relative">
//                     <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                     <Input 
//                       id="monthlyAmount" 
//                       placeholder="Monthly amount"
//                       className="pl-10 border-2 focus:border-secondary transition-colors"
//                     />
//                   </div>
//                 </div>
//                 <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white group">
//                   <Repeat className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                   Start Monthly Giving
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Corporate Sponsorship */}
//             <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 md:col-span-2 lg:col-span-1">
//               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <CardHeader className="relative z-10 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <Building className="h-8 w-8 text-white" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">Corporate Partnership</CardTitle>
//                 <CardDescription className="text-muted-foreground">Partner with us for large-scale impact and visibility</CardDescription>
//               </CardHeader>
//               <CardContent className="relative z-10 space-y-6">
//                 <div className="space-y-4">
//                   {[
//                     "Project sponsorship opportunities",
//                     "Employee engagement programs",
//                     "Corporate social responsibility",
//                     "Brand visibility and recognition"
//                   ].map((benefit, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
//                       <span className="text-sm text-muted-foreground">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <Button className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white group">
//                   <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                   Partner With Us
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Payment Methods */}
//       <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-6">
//               <Shield className="h-5 w-5 text-accent animate-pulse" />
//               <span className="text-sm font-bold text-accent">Secure Payments</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Easy Payment Options</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               We accept multiple payment methods to make donating convenient and secure for everyone in Uganda
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: Smartphone,
//                 title: "MTN Mobile Money",
//                 description: "Pay with MTN MoMo *165#",
//                 color: "yellow-500",
//                 instructions: "Dial *165# > Send Money > 0700123456"
//               },
//               {
//                 icon: Smartphone,
//                 title: "Airtel Money",
//                 description: "Pay with Airtel Money *185#",
//                 color: "red-500",
//                 instructions: "Dial *185# > Send Money > 0750987654"
//               },
//               {
//                 icon: Landmark,
//                 title: "Bank Transfer",
//                 description: "Direct bank transfer",
//                 color: "blue-600",
//                 instructions: "Stanbic Bank: Account 9030012345678"
//               },
//               {
//                 icon: CreditCard,
//                 title: "Visa/Mastercard",
//                 description: "International cards accepted",
//                 color: "green-600",
//                 instructions: "Secure online payment processing"
//               }
//             ].map((method, index) => (
//               <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105">
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <CardContent className="p-6 relative z-10">
//                   <div className={`w-16 h-16 bg-${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                     <method.icon className="h-8 w-8 text-white" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
//                   <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
//                   <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-2">{method.instructions}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Live Donation Form */}
//           <Card className="max-w-2xl mx-auto border-0 shadow-2xl">
//             <CardHeader className="text-center">
//               <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-3">
//                 <Heart className="h-6 w-6 text-primary" />
//                 Donate Now in UGX
//               </CardTitle>
//               <CardDescription className="text-muted-foreground">Choose your preferred payment method</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               {/* Amount Selection */}
//               <div className="space-y-4">
//                 <Label className="text-base font-semibold text-foreground">Select Amount (Uganda Shillings)</Label>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                   {["50,000", "100,000", "250,000", "500,000"].map((amount) => (
//                     <Button key={amount} variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all h-12">
//                       UGX {amount}
//                     </Button>
//                   ))}
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="customAmountUGX" className="text-sm font-medium">Custom Amount (UGX)</Label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium">UGX</span>
//                     <Input 
//                       id="customAmountUGX" 
//                       placeholder="Enter amount"
//                       className="pl-12 border-2 focus:border-primary transition-colors text-lg"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Method Selection */}
//               <div className="space-y-4">
//                 <Label className="text-base font-semibold text-foreground">Choose Payment Method</Label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {/* MTN Mobile Money */}
//                   <Card className="cursor-pointer border-2 border-transparent hover:border-yellow-500 transition-colors">
//                     <CardContent className="p-4 text-center">
//                       <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
//                         <Smartphone className="h-6 w-6 text-white" />
//                       </div>
//                       <h4 className="font-medium text-foreground">MTN Mobile Money</h4>
//                       <p className="text-sm text-muted-foreground">Pay with your MTN number</p>
//                     </CardContent>
//                   </Card>

//                   {/* Airtel Money */}
//                   <Card className="cursor-pointer border-2 border-transparent hover:border-red-500 transition-colors">
//                     <CardContent className="p-4 text-center">
//                       <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
//                         <Smartphone className="h-6 w-6 text-white" />
//                       </div>
//                       <h4 className="font-medium text-foreground">Airtel Money</h4>
//                       <p className="text-sm text-muted-foreground">Pay with your Airtel number</p>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 {/* Phone Number Input for Mobile Money */}
//                 <div className="space-y-2">
//                   <Label htmlFor="phoneNumber" className="text-sm font-medium">Mobile Number</Label>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">+256</span>
//                     <Input 
//                       id="phoneNumber" 
//                       placeholder="700123456"
//                       className="pl-16 border-2 focus:border-primary transition-colors"
//                     />
//                   </div>
//                   <p className="text-xs text-muted-foreground">Enter your mobile money number (without +256)</p>
//                 </div>
//               </div>

//               {/* Donor Information */}
//               <div className="space-y-4">
//                 <Label className="text-base font-semibold text-foreground">Donor Information (Optional)</Label>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="donorName" className="text-sm font-medium">Full Name</Label>
//                     <Input id="donorName" placeholder="Enter your name" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="donorEmail" className="text-sm font-medium">Email Address</Label>
//                     <Input id="donorEmail" type="email" placeholder="your.email@example.com" />
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <input type="checkbox" id="anonymous" className="w-4 h-4 text-primary" />
//                   <Label htmlFor="anonymous" className="text-sm text-muted-foreground">
//                     Make this donation anonymous
//                   </Label>
//                 </div>
//               </div>

//               {/* Donation Purpose */}
//               <div className="space-y-2">
//                 <Label htmlFor="donationPurpose" className="text-base font-semibold text-foreground">Donation Purpose</Label>
//                 <select className="w-full px-3 py-2 border-2 border-input rounded-md bg-background focus:border-primary transition-colors">
//                   <option>General Fund - Where Most Needed</option>
//                   <option>Menstrual Health Education Programs</option>
//                   <option>Water & Sanitation Projects</option>
//                   <option>Girls Education Scholarships</option>
//                   <option>Emergency Response Fund</option>
//                   <option>Administrative Costs</option>
//                 </select>
//               </div>

//               {/* Donation Button */}
//               <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group h-14 text-lg">
//                 <Heart className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
//                 Complete Donation
//                 <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
//               </Button>

//               {/* Security Notice */}
//               <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//                 <div className="flex items-center gap-3">
//                   <Shield className="h-5 w-5 text-green-600" />
//                   <div>
//                     <p className="text-sm font-medium text-green-800">Secure & Encrypted</p>
//                     <p className="text-xs text-green-600">Your payment information is protected with bank-level security</p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Impact Stories */}
//       <section className="py-16 md:py-24 px-4 md:px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3 mb-6">
//               <Star className="h-5 w-5 text-accent animate-pulse" />
//               <span className="text-sm font-bold text-accent">Real Impact</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Your Donations at Work</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               See how your contributions are creating lasting change in communities across Uganda
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h3 className="text-2xl md:text-3xl font-bold text-foreground">
//                   Last Month's Impact
//                 </h3>
//                 <p className="text-lg text-muted-foreground">
//                   Thanks to our generous donors, we achieved remarkable results in December 2024.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <div className="text-3xl font-bold text-primary">147</div>
//                   <div className="text-sm text-muted-foreground">Girls reached with education</div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-3xl font-bold text-secondary">3</div>
//                   <div className="text-sm text-muted-foreground">New water points built</div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-3xl font-bold text-accent">$12,450</div>
//                   <div className="text-sm text-muted-foreground">Total donations received</div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-3xl font-bold text-primary">98%</div>
//                   <div className="text-sm text-muted-foreground">Went directly to programs</div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <h4 className="text-xl font-semibold text-foreground">Recent Achievements:</h4>
//                 <div className="space-y-3">
//                   {[
//                     "Completed menstrual health workshops in 5 schools",
//                     "Distributed 300 reusable sanitary pad kits",
//                     "Trained 25 teachers on health education delivery",
//                     "Built 2 handwashing stations in rural schools"
//                   ].map((achievement, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
//                       <span className="text-muted-foreground">{achievement}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <div className="relative rounded-xl overflow-hidden shadow-lg">
//                   <Image
//                     src="https://images.unsplash.com/photo-1607142634950-c5e8b5a8b72c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//                     alt="Girls in classroom"
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-48"
//                   />
//                 </div>
//                 <div className="relative rounded-xl overflow-hidden shadow-lg">
//                   <Image
//                     src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//                     alt="Water facility"
//                     width={400}
//                     height={200}
//                     className="object-cover w-full h-32"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-4 pt-8">
//                 <div className="relative rounded-xl overflow-hidden shadow-lg">
//                   <Image
//                     src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//                     alt="Happy students"
//                     width={400}
//                     height={200}
//                     className="object-cover w-full h-32"
//                   />
//                 </div>
//                 <div className="relative rounded-xl overflow-hidden shadow-lg">
//                   <Image
//                     src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//                     alt="Community meeting"
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-48"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Transparency Section */}
//       <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-6">
//               <Eye className="h-5 w-5 text-accent animate-pulse" />
//               <span className="text-sm font-bold text-accent">Full Transparency</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">How We Use Your Donations</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               We believe in complete transparency. Here's exactly how your contributions are allocated.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-6">
//                 {[
//                   { label: "Direct Program Activities", percentage: 82, amount: "$82", color: "primary" },
//                   { label: "Program Support & Training", percentage: 16, amount: "$16", color: "secondary" },
//                   { label: "Administrative Costs", percentage: 2, amount: "$2", color: "accent" }
//                 ].map((item, index) => (
//                   <div key={index} className="space-y-3">
//                     <div className="flex justify-between items-center">
//                       <span className="font-medium text-foreground">{item.label}</span>
//                       <div className="text-right">
//                         <div className="text-lg font-bold text-foreground">{item.percentage}%</div>
//                         <div className="text-sm text-muted-foreground">({item.amount} per $100)</div>
//                       </div>
//                     </div>
//                     <div className="w-full bg-muted rounded-full h-3">
//                       <div 
//                         className={`bg-gradient-to-r from-${item.color} to-${item.color}/80 h-3 rounded-full transition-all duration-1000 ease-out`}
//                         style={{ width: `${item.percentage}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="space-y-4">
//                 <h4 className="text-xl font-semibold text-foreground">Why We're Efficient:</h4>
//                 <div className="space-y-3">
//                   {[
//                     "Volunteer-based leadership reduces overhead",
//                     "Strategic partnerships minimize operational costs",
//                     "Local implementation reduces travel expenses",
//                     "Community ownership ensures sustainability"
//                   ].map((reason, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
//                       <span className="text-muted-foreground">{reason}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <Card className="border-0 shadow-2xl">
//               <CardHeader className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Award className="h-8 w-8 text-white" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold text-foreground">Financial Accountability</CardTitle>
//                 <CardDescription className="text-muted-foreground">Certified and audited for transparency</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="space-y-4">
//                   {[
//                     "Annual independent financial audits",
//                     "Quarterly impact and financial reports",
//                     "Board oversight and governance",
//                     "Donor access to detailed breakdowns"
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
//                       <span className="text-sm text-muted-foreground">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <Button variant="outline" className="w-full border-2 border-primary/30 text-primary hover:bg-primary/10 group">
//                   <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
//                   Download Financial Report
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
//         <div className="container mx-auto max-w-4xl text-center">
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3">
//                 <HandHeart className="h-5 w-5 text-accent animate-pulse" />
//                 <span className="text-sm font-bold text-accent">Ready to Give</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
//                 Start Your{" "}
//                 <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
//                   Impact Journey
//                 </span>
//               </h2>
//               <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//                 Every donation, whether large or small, creates ripples of positive change. 
//                 Join thousands of supporters who are transforming lives across Uganda.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
//                 <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 Make Your First Donation
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button variant="outline" size="lg" className="border-2 border-primary/30 text-primary hover:bg-primary/10 group">
//                 <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 Ask Questions
//               </Button>
//             </div>

//             <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
//               <div className="flex items-center gap-2">
//                 <Shield className="h-4 w-4 text-green-600" />
//                 <span>Secure & Encrypted</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle className="h-4 w-4 text-green-600" />
//                 <span>Tax Deductible</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Eye className="h-4 w-4 text-green-600" />
//                 <span>Full Transparency</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }





"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import PaymentDashboards from "@/components/Payment-Dashboard"
import {
  Heart,
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Award,
  Eye,
  Download,
  MessageCircle,
  HandHeart,
  Smartphone,
  Landmark,
  Copy,
} from "lucide-react"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3">
                  <Heart className="h-5 w-5 text-accent animate-pulse" />
                  <span className="text-sm font-bold text-accent">Make a Difference</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                  Your Support{" "}
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Changes Lives
                  </span>
                </h1>
                <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground max-w-2xl">
                  Every donation, no matter the size, helps us empower more women, girls and youths across Uganda. Join
                  our mission to create lasting change in communities that need it most.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">$25</div>
                  <div className="text-sm text-muted-foreground">Provides hygiene kits for 5 girls</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">$100</div>
                  <div className="text-sm text-muted-foreground">Sponsors a girl's education for 1 month</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-accent">$500</div>
                  <div className="text-sm text-muted-foreground">Builds a handwashing station</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">$1,000</div>
                  <div className="text-sm text-muted-foreground">Funds a complete school program</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  onClick={() => document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 text-primary hover:bg-primary/10 group bg-transparent"
                  onClick={() => document.getElementById('impact-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  See Impact
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg"
                  alt="Students celebrating success"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[400px] md:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Impact Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">98%</div>
                      <div className="text-sm text-muted-foreground">of donations go directly to programs</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div className="text-sm font-semibold text-foreground">Secure & Trusted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Donation Details Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-cyan-500/10 rounded-full px-8 py-4 border-2 border-blue-300/30 dark:border-blue-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Landmark className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">Direct Donation Options</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">
                Send Your Donation Directly
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              You can donate directly to our bank account or mobile money numbers. Every contribution makes a difference!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* MTN Mobile Money */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-yellow-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 text-center pb-4">
                {/* MTN Logo */}
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl p-2">
                  <Image src="https://ik.imagekit.io/xjtx0zx5v/images/MTNLogo.png" alt="MTN Mobile Money" width={80} height={80} className="object-contain" />
                </div>
                <CardTitle className="text-2xl font-extrabold text-yellow-600 dark:text-yellow-400">MTN Mobile Money</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-yellow-300/50 dark:border-yellow-500/30">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">MOMO Number:</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      [MTN NUMBER]
                    </p>
                    <button className="p-2 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 rounded-lg transition-colors" aria-label="Copy MTN number">
                      <Copy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Dial *165# to send money</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Name: Thriving Ladies Foundation Limited</p>
                </div>
              </CardContent>
            </Card>

            {/* Airtel Money */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-red-50 to-rose-50 dark:from-gray-800 dark:to-red-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 text-center pb-4">
                {/* Airtel Logo */}
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-xl p-2">
                  <Image src="https://ik.imagekit.io/xjtx0zx5v/images/airtel.jpeg" alt="Airtel Money" width={80} height={80} className="object-contain" />
                </div>
                <CardTitle className="text-2xl font-extrabold text-red-600 dark:text-red-400">Airtel Money</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-red-300/50 dark:border-red-500/30">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Airtel Money:</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                      +256740350139 or +256740349235
                    </p>
                    <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors" aria-label="Copy Airtel number">
                      <Copy className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Dial *185# to send money</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Name: Thriving Ladies Foundation Limited</p>
                </div>
              </CardContent>
            </Card>

            {/* Centenary Bank */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-purple-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 text-center pb-4">
                {/* Centenary Bank Logo */}
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-xl p-2">
                  <Image src="https://ik.imagekit.io/xjtx0zx5v/images/centenaryBankLogo.png" alt="Centenary Bank" width={80} height={80} className="object-contain" />
                </div>
                <CardTitle className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Centenary Bank</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-purple-300/50 dark:border-purple-500/30">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Account Number:</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      3100122035
                    </p>
                    <button className="p-2 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors" aria-label="Copy account number">
                      <Copy className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Bank: Centenary Bank</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Account Name: Thriving Ladies Foundation Limited</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Notice */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-2 border-green-300/50 dark:border-green-500/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-green-900/20 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Important Information</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span>After making your donation, please send us a screenshot or confirmation message to help us track your contribution.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span>All donations are tax-deductible and will be used directly for our programs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span>For any questions or assistance, please contact us through our contact page.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment-section" className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <PaymentDashboards />
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3 mb-6">
              <Star className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">Real Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Your Donations at Work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how your contributions are creating lasting change in communities across Uganda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Last Month's Impact</h3>
                <p className="text-lg text-muted-foreground">
                  Thanks to our generous donors, we achieved remarkable results in December 2024.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">147</div>
                  <div className="text-sm text-muted-foreground">Girls reached with education</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">3</div>
                  <div className="text-sm text-muted-foreground">New water points built</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">$12,450</div>
                  <div className="text-sm text-muted-foreground">Total donations received</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Went directly to programs</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Recent Achievements:</h4>
                <div className="space-y-3">
                  {[
                    "Completed menstrual health workshops in 5 schools",
                    "Distributed 300 reusable sanitary pad kits",
                    "Trained 25 teachers on health education delivery",
                    "Built 2 handwashing stations in rural schools",
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg"
                    alt="Girls in classroom"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg"
                    alt="Water facility"
                    width={400}
                    height={200}
                    className="object-cover w-full h-32"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/training4.jpeg"
                    alt="Happy students"
                    width={400}
                    height={200}
                    className="object-cover w-full h-32"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg"
                    alt="Community meeting"
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-6">
              <Eye className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">Full Transparency</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How We Use Your Donations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in complete transparency. Here's exactly how your contributions are allocated.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { label: "Direct Program Activities", percentage: 82, colorClass: "bg-primary" },
                  { label: "Program Support & Training", percentage: 16, colorClass: "bg-secondary" },
                  { label: "Administrative Costs", percentage: 2, colorClass: "bg-accent" },
                ].map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{item.label}</span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground">{item.percentage}%</div>
                        <div className="text-sm text-muted-foreground">(${item.percentage} per $100)</div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className={`${item.colorClass} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Why We're Efficient:</h4>
                <div className="space-y-3">
                  {[
                    "Volunteer-based leadership reduces overhead",
                    "Strategic partnerships minimize operational costs",
                    "Local implementation reduces travel expenses",
                    "Community ownership ensures sustainability",
                  ].map((reason, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Financial Accountability</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Certified and audited for transparency
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    "Annual independent financial audits",
                    "Quarterly impact and financial reports",
                    "Board oversight and governance",
                    "Donor access to detailed breakdowns",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/30 text-primary hover:bg-primary/10 group bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download Financial Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3">
                <HandHeart className="h-5 w-5 text-accent animate-pulse" />
                <span className="text-sm font-bold text-accent">Ready to Give</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Start Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Impact Journey
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Every donation, whether large or small, creates ripples of positive change. Join thousands of supporters
                who are transforming lives across Uganda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                onClick={() => document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Make Your First Donation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 text-primary hover:bg-primary/10 group bg-transparent"
                asChild
              >
                <Link href="/questions">
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Ask Questions
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Tax Deductible</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-green-600" />
                <span>Full Transparency</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
