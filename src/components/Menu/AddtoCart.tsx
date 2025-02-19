"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { formatCurrency } from "@/lib/formatters";
import { ProductWithRelations } from "@/types/products";
import { Extra, Size } from "@prisma/client";

const AddtoCart = ({ item }: { item: ProductWithRelations }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="!rounded-full mt-4 text-white !px-8"
        >
          <span>Add to Card</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[80vh] overflow-y-scroll">
        <DialogHeader className="flex items-center">
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <DialogTitle className="text-center">{item.name}</DialogTitle>
          <DialogDescription className="text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size">Pick your size</Label>
            <PickSize sizes={item.sizes} basePrice={item.basePrice} />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any extras?</Label>
            <Extras extras={item.extras} basePrice={item.basePrice} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full h-10">
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

function PickSize({ sizes, basePrice }: { sizes: Size[]; basePrice: number }) {
  return (
    <RadioGroup>
      {sizes.map((s) => (
        <div
          key={s.id}
          className="flex items-center space-x-2 rounded shadow-sm p-2 border hover:shadow-md transition-all duration-500"
        >
          <RadioGroupItem value={s.id} id={s.id} />
          <Label htmlFor={s.id}>
            {s.name} - {formatCurrency(s.price + basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function Extras({ extras, basePrice }: { extras: Extra[]; basePrice: number }) {
  return (
    <div className="">
      {extras.map((e) => (
        <div
          key={e.id}
          className="flex items-center space-x-2 rounded shadow-sm p-2 border mb-2 hover:shadow-md transition-all duration-500"
        >
          <Checkbox id={e.id} />
          <Label
            htmlFor={e.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {e.name}- {formatCurrency(e.price + basePrice)}
          </Label>
        </div>
      ))}
    </div>
  );
}

export default AddtoCart;
