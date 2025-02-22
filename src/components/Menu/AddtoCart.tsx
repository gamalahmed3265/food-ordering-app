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
import { Extra, ProductSizes, Size } from "@prisma/client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCartItem, selectCartItems } from "@/redux/features/cart/cartSlice";

const AddtoCart = ({ item }: { item: ProductWithRelations }) => {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  // اللى جاي من السله او صمول
  const defaultSize =
    cart.find((elemnt) => elemnt.id === item.id)?.size ||
    item.sizes.find((size) => size.name === ProductSizes.SMALL);
  const [selectedSize, setSelectSize] = useState<Size>(defaultSize!);

  const defaultExtras =
    cart.find((elemnt) => elemnt.id === item.id)?.extras || [];

  const [selectedExtras, setSelectExtras] = useState<Extra[]>(defaultExtras);

  let totalPrice = item.basePrice;
  if (selectedSize) {
    totalPrice += selectedSize.price;
  }
  if (selectedExtras.length > 0) {
    for (const ex of selectedExtras) {
      totalPrice += ex.price;
    }
  }
  const handelAddToCart = () => {
    dispatch(
      addCartItem({
        name: item.name,
        id: item.id,
        image: item.image,
        basePrice: item.basePrice,
        size: selectedSize,
        extras: selectedExtras,
      })
    );
  };
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
            <PickSize
              sizes={item.sizes}
              basePrice={item.basePrice}
              selectedSize={selectedSize}
              setSelectSize={setSelectSize}
            />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any extras?</Label>
            <Extras
              extras={item.extras}
              basePrice={item.basePrice}
              selectedExtras={selectedExtras}
              setSelectExtras={setSelectExtras}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full h-10"
            onClick={handelAddToCart}
          >
            Add to Cart - {formatCurrency(totalPrice)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

function PickSize({
  sizes,
  basePrice,
  selectedSize,
  setSelectSize,
}: {
  sizes: Size[];
  basePrice: number;
  selectedSize: Size;
  setSelectSize: React.Dispatch<React.SetStateAction<Size>>;
}) {
  return (
    <RadioGroup>
      {sizes.map((s) => (
        <div
          key={s.id}
          className="flex items-center space-x-2 rounded shadow-sm p-2 border hover:shadow-md transition-all duration-500"
        >
          <RadioGroupItem
            value={selectedSize.name}
            checked={selectedSize.id === s.id}
            onClick={() => setSelectSize(s)}
            id={s.id}
          />
          <Label htmlFor={s.id}>
            {s.name} - {formatCurrency(s.price + basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function Extras({
  extras,
  basePrice,
  selectedExtras,
  setSelectExtras,
}: {
  extras: Extra[];
  basePrice: number;
  selectedExtras: Extra[];
  setSelectExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  const handelExtrea = (extra: Extra) => {
    if (selectedExtras.find((e) => e.id === extra.id)) {
      const filterSelectedExras = selectedExtras.filter(
        (e) => e.id !== extra.id
      );
      setSelectExtras(filterSelectedExras);
    } else {
      setSelectExtras((prev) => [...prev, extra]);
    }
  };
  return (
    <div className="">
      {extras.map((e) => (
        <div
          key={e.id}
          className="flex items-center space-x-2 rounded shadow-sm p-2 border mb-2 hover:shadow-md transition-all duration-500"
        >
          <Checkbox
            id={e.id}
            checked={Boolean(selectedExtras.find((w) => w.id === e.id))}
            onClick={() => handelExtrea(e)}
          />
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
