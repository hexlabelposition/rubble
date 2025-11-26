export interface PropertySummary {
  id: string;
  title: string;
  price: number;
  address: string;

  coverImage: string;

  details: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
}

export type PropertySummaryList = Array<PropertySummary>;
