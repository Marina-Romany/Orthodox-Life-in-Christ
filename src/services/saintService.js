export async function getTodaySaint() {
    try {
      const today = new Date();
  
      const date = `${today.getFullYear()}-${
        String(today.getMonth() + 1).padStart(2, "0")
      }-${
        String(today.getDate()).padStart(2, "0")
      }`;
  
      const res = await fetch(
        `https://api.ispovednik.org/api/v1/calendar/day/${date}?lang=en`
      );
  
      const data = await res.json();
  
      const saint =
        data.data[date].saints?.[0];
  
      return saint;
    } catch (error) {
      console.error(error);
      return null;
    }
  }