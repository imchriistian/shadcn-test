import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function StackedForm() {
    return (
        <div className="tw:container tw:mx-auto tw:px-4 md:tw:px-6 2xl:tw:max-w-[1400px] tw:py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="tw:space-y-8">
                            {/* Profile section */}
                            <div className="tw:space-y-6">
                                <div className="tw:space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" />
                                </div>

                                <div className="tw:space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="tw:space-y-2">
                                    <Label htmlFor="about">About</Label>
                                    <Textarea
                                        id="about"
                                        placeholder="Write a few sentences about yourself"
                                    />
                                </div>
                            </div>

                            <Separator />

                            {/* Additional Details */}
                            <div className="tw:space-y-6">
                                <div>
                                    <h3 className="tw:text-lg tw:font-medium">Additional Details</h3>
                                    <p className="tw:text-sm tw:text-muted-foreground">
                                        Please provide any additional information.
                                    </p>
                                </div>

                                <div className="tw:space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" placeholder="Your company name" />
                                </div>

                                <div className="tw:space-y-2">
                                    <Label htmlFor="role">Role</Label>
                                    <Input id="role" placeholder="Your role" />
                                </div>

                                <div className="tw:space-y-2">
                                    <Label htmlFor="country">Country</Label>
                                    <Input id="country" placeholder="Your country" />
                                </div>
                            </div>

                            <div className="tw:flex tw:justify-end">
                                <Button>Save Changes</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Input type="text" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <Input type="text" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
