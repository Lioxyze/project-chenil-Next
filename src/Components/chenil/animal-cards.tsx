"use client";
import AnimalCard from "@/Components/chenil/animal-card";

const AnimalCards = () => {
  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <AnimalCard />
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};

export default AnimalCards;
