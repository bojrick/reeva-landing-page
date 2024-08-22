'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegistrationForm() {
  return (
    <section className="my-12 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Register Your Interest</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <Input type="text" id="name" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <Input type="email" id="email" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Phone</label>
          <Input type="tel" id="phone" placeholder="Your Phone Number" />
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </section>
  );
}