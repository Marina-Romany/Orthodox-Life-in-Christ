export async function getTodayData() {
    const today = new Date();
  
    const url =
      `https://orthocal.info/api/gregorian/` +
      `${today.getFullYear()}/` +
      `${today.getMonth() + 1}/` +
      `${today.getDate()}/`;
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
  
    return await response.json();
  }