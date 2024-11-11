import CategoryFilter from "./filters/CategoryFilter";
import Header from "./Header";
import HeroContent from "./HeroContent";
import KeywordFilter from "./filters/KeywordFilter";
import PriceFilter from "./filters/PriceFilter";
import SortFilter from "./filters/SortFilter";

export default function Filters (){
  return (
    <>
      <Header />
      <div className="mx-24">
        <HeroContent />
        <KeywordFilter />
        <PriceFilter className="mx-24" />

        <div className="flex flex-col md:flex-row justify-between items-center ">
          <CategoryFilter />
          <SortFilter />
        </div>
      </div>
    </>
  );
};

