'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegistrationForm() {
  return (
    <section className="my-12 bg-secondary text-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Register Your Interest</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <Input type="text" id="name" placeholder="Your Name" className="bg-white text-secondary" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <Input type="email" id="email" placeholder="Your Email" className="bg-white text-secondary" />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Phone</label>
          <Input type="tel" id="phone" placeholder="Your Phone Number" className="bg-white text-secondary" />
        </div>
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">Submit</Button>
      </form>
    </section>
  );
}