"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toast } from "@/components/ui/toast";
import { ToastProvider } from "@/components/ui/toast";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ShadcnDemo() {
  return (
    <ToastProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background flex flex-col">
          <header className="border-b border-foreground">
            <div className="container mx-auto py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Shadcn Demo</h1>
              <nav>
                <Button variant="ghost" className="mr-2">
                  Home
                </Button>
                <Button variant="ghost" className="mr-2">
                  About
                </Button>
                <Button variant="secondary">Contact</Button>
              </nav>
            </div>
          </header>

          <main className="flex-grow container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>
                    Various form components from shadcn
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div>
                    <Label>Favorite Color</Label>
                    <RadioGroup defaultValue="red">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="red" id="red" />
                        <Label htmlFor="red">Red</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="blue" id="blue" />
                        <Label htmlFor="blue">Blue</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Submit</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Components</CardTitle>
                  <CardDescription>Buttons, toggles, and more</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <div>
                    <Label>Volume</Label>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      className="bg-secondary"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Toggle>Toggle</Toggle>
                    <Toggle variant="outline">Outline</Toggle>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here."
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Tabs Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="account">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <p>Manage your account settings here.</p>
                    </TabsContent>
                    <TabsContent value="password">
                      <p>Change your password here.</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </main>

          <footer className="border-t">
            <div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
              © 2023 Shadcn Demo. All rights reserved.
            </div>
          </footer>
        </div>

        <Toast />
      </TooltipProvider>
    </ToastProvider>
  );
}

