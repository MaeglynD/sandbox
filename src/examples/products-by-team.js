"use client";

import { ProductSearchProvider } from "@/providers/product-search";

import { ProductSearchResults } from "@/components/product/product-search-results";
import { TeamSelector } from "@/components/selectors/team-selector";

const teams = [
  {
    acronym: "ATL",
    shortName: "Hawks",
    logo: "./nba-team-logos/atlanta hawks.svg",
  },
  {
    acronym: "BOS",
    shortName: "Celtics",
    logo: "./nba-team-logos/boston celtics.svg",
  },
  {
    acronym: "BKN",
    shortName: "Nets",
    logo: "./nba-team-logos/brooklyn nets.svg",
  },
];

function Content() {
  return (
    <div className="bg-black w-full h-full mx-auto p-[20px] flex flex-col justify-center items-center">
      <div className=" h-full w-full max-w-[640px] bg-[rgba(255,255,255,0.05)] flex rounded-[10px] flex-col">
        <div className="text-[24px] min-h-[100px] font-semibold p-[20px] flex items-center border-b border-b-[rgba(255,255,255,0.05)] shadow-m shrink-0">
          <TeamSelector teams={teams} />
        </div>

        <div className="pb-0 overflow-y-scroll">
          <ProductSearchResults />
        </div>
      </div>
    </div>
  );
}

export function ProductsByTeam() {
  return (
    <ProductSearchProvider>
      <Content />
    </ProductSearchProvider>
  );
}
