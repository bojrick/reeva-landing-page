'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegistrationForm() {
  return (
    <section className="my-12 bg-secondary text-white p-6 sm:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Register Your Interest</h2>
      <form className="space-y-4">
        {['Name', 'Email', 'Phone'].map((field, index) => (
          <div key={index} className="group">
            <label htmlFor={field.toLowerCase()} className="block mb-1 transition-colors duration-300 group-focus-within:text-accent">{field}</label>
            <Input 
              type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'} 
              id={field.toLowerCase()} 
              placeholder={`Your ${field}`} 
              className="bg-white text-secondary transition-shadow duration-300 focus:shadow-lg"
            />
          </div>
        ))}
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white transition-transform duration-300 hover:scale-105">
          Submit
        </Button>
      </form>
    </section>
  );
}