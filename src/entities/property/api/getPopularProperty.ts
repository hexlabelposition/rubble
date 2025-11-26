import { mockPopularProperty } from "../config/mockPopularProperty";

export async function getPopularProperty() {
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return the mock popular property data
  return mockPopularProperty;
}
