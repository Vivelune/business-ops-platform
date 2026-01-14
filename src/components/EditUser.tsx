"use client"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'

import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';






 const formSchema = z.object({
  username: z.string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username must be less than 50 characters"),
  email: z.string()
    .email("Invalid email address"),
  role: z.enum(["Admin", "User", "Moderator"]),
  phone: z.string()
    .regex(/^\+?\d{1,3}?[-.\s]?\$?\d{1,4}\$?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Invalid phone number"),
  age: z.number()
    .int("Age must be an integer")
    .positive("Age must be positive")
    .max(120, "Age must be less than 120"),
  location: z.string()
    .min(1, "Location is required")
    .max(100, "Location is too long"),
  joined: z.string()
    .min(1, "Join date is required")
    .max(50, "Join date is too long"),
  bio: z.string()
    .max(500, "Bio is too long"),
});

const EditUser = () => {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "john.doe",
      email: "john.doe@example.com",
      role: "User",
      phone: "+1-123-456-7890",
      age: 25,
      location: "New York",
      joined: "2023-01-01",
      bio: "A short bio about the user.",
    },
  })


  return (
    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                        <SheetTitle>Edit User</SheetTitle>
                        <SheetDescription asChild>
                           <Form {...form}>
                                <form className='space-y-8'>
                                    <FormField control={form.control} name='username' render={({field})=>(
                                    <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>This is your public username.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                    )}/>

                                    <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john.doe@example.com" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter a valid email address.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            <SelectItem value="Admin">Admin</SelectItem>
                                            <SelectItem value="User">User</SelectItem>
                                            <SelectItem value="Moderator">Moderator</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>Select the user's role.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+1-123-456-7890" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter a valid phone number.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="age"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Age</FormLabel>
                                        <FormControl>
                                            <Input
                                            type="number"
                                            placeholder="25"
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                            />
                                        </FormControl>
                                        <FormDescription>Enter the user's age (must be a positive integer).</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="New York" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the user's location.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="joined"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Join Date</FormLabel>
                                        <FormControl>
                                            <Input placeholder="2023-01-01" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the date the user joined.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="bio"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="A short bio about the user." {...field} />
                                        </FormControl>
                                        <FormDescription>Provide a brief biography (optional).</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                        <Button type="submit">Submit</Button>

                                </form>
                           </Form>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
  )
}

export default EditUser
