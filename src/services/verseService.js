export const getVerse = async () => {
    const res = await fetch("https://bible-api.com/john 3:16");
  
    if (!res.ok) {
      throw new Error("Failed to fetch verse");
    }
  
    const data = await res.json();
  
    return {
      verse: data.text,
      reference: data.reference,
    };
  };