import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Home, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CONTACT_SITUATIONS, cn } from "@/lib/index";

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  propertyAddress: z.string().min(5, "Please enter your full property address"),
  situation: z.enum(["foreclosure-risk", "want-to-sell", "sell-and-stay", "other"], {
    required_error: "Please select your current situation",
  }),
  message: z.string().min(10, "Please provide a bit more detail about how we can help"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  variant?: 'default' | 'compact';
}

export function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      propertyAddress: "",
      situation: "foreclosure-risk",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // Simulate professional API processing for Gmash LLC
      await new Promise((resolve) => setTimeout(resolve, 1800));
      console.log("Consultation Request Received:", values);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "flex flex-col items-center justify-center text-center p-8 bg-card rounded-2xl border border-border shadow-xl",
          variant === 'compact' ? "py-12" : "min-h-[600px]"
        )}
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <ShieldCheck className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-3xl font-serif font-bold mb-4 text-foreground tracking-tight">
          Request Received Securely
        </h3>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          Thank you for reaching out to Gmash LLC. Your inquiry is being handled with the utmost confidentiality. 
          One of our senior foreclosure specialists will contact you within 24 hours to discuss your personalized path forward.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 border-primary text-primary hover:bg-primary/5 px-10 rounded-full font-semibold"
          onClick={() => setIsSuccess(false)}
        >
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <Card className={cn(
      "overflow-hidden border-none shadow-2xl bg-card rounded-2xl",
      variant === 'compact' ? "max-w-md" : "max-w-4xl mx-auto"
    )}>
      {variant === 'default' && (
        <CardHeader className="bg-primary text-primary-foreground p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Home className="w-7 h-7 text-accent" />
            </div>
            <CardTitle className="text-4xl font-serif font-bold tracking-tight">
              Request a Private Consultation
            </CardTitle>
          </div>
          <CardDescription className="text-primary-foreground/90 text-xl font-light max-w-2xl relative z-10">
            Begin your journey to financial stability today. Our team provides empathetic, legal-grade support for homeowners in transition.
          </CardDescription>
        </CardHeader>
      )}
      
      <CardContent className={cn(
        "p-8 md:p-12",
        variant === 'compact' && "pt-12"
      )}>
        {variant === 'compact' && (
          <div className="mb-10">
            <h3 className="text-3xl font-serif font-bold mb-3 text-foreground">Connect With Us</h3>
            <p className="text-muted-foreground text-lg">Your privacy is our priority. Get expert foreclosure assistance now.</p>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold text-base">Full Legal Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. Johnathan Smith" 
                        className="h-14 bg-background border-input focus:ring-accent/30 focus:border-accent transition-all rounded-xl text-lg"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-destructive font-medium" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold text-base">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="h-14 bg-background border-input focus:ring-accent/30 focus:border-accent transition-all rounded-xl text-lg"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-destructive font-medium" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold text-base">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="(555) 000-0000" 
                        className="h-14 bg-background border-input focus:ring-accent/30 focus:border-accent transition-all rounded-xl text-lg"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-destructive font-medium" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="situation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold text-base">Current Situation</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-14 bg-background border-input focus:ring-accent/30 rounded-xl text-lg">
                          <SelectValue placeholder="How can we help?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-border shadow-2xl rounded-xl">
                        {CONTACT_SITUATIONS.map((sit) => (
                          <SelectItem 
                            key={sit.value} 
                            value={sit.value} 
                            className="hover:bg-accent hover:text-accent-foreground cursor-pointer py-3 text-base font-medium transition-colors"
                          >
                            {sit.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-destructive font-medium" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="propertyAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-semibold text-base">Property Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="123 Home St, City, State, ZIP" 
                      className="h-14 bg-background border-input focus:ring-accent/30 focus:border-accent transition-all rounded-xl text-lg"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-destructive font-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-semibold text-base">Additional Details (Timeline, Bank Notices, etc.)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us more about your specific needs so we can prepare..."
                      className="min-h-[160px] bg-background border-input focus:ring-accent/30 focus:border-accent transition-all rounded-xl text-lg resize-none p-4"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-destructive font-medium" />
                </FormItem>
              )}
            />

            <div className="pt-8">
              <Button 
                type="submit" 
                className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/95 text-primary-foreground shadow-xl shadow-primary/20 transition-all rounded-2xl active:scale-[0.98] group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-4">
                    <Loader2 className="w-6 h-6 animate-spin text-accent" />
                    Validating Submission...
                  </span>
                ) : (
                  <span className="flex items-center gap-4">
                    Secure Your Free Consultation <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
              <div className="mt-10 p-5 bg-muted/40 rounded-2xl border border-border/60">
                <p className="text-[12px] leading-relaxed text-center text-muted-foreground uppercase tracking-[0.15em] font-medium">
                  Privacy Guarantee: Gmash LLC respects your situation. Your information is encrypted and will only be used to facilitate your consultation. We never share data with third-party solicitors.
                </p>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
