import { ApiResponse } from "../networkAPI/NetworkCommands";

// Shuffles the word dump
export function PrepareWordDump(wordDump: string[]): string[] {
  for (let i = 0; i < wordDump.length; ++i) {
    wordDump[i] = wordDump[i].replace(/\s/g, "");
  }
  // Start from the end of the array
  for (let i = wordDump.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap elements at randomIndex and i
    [wordDump[i], wordDump[randomIndex]] = [wordDump[randomIndex], wordDump[i]];
  }

  return wordDump;
}

// Retrieve top 10 WPM records
export function RetrieveTop10(data: ApiResponse[]): ApiResponse[] {
  try {
    const sortedData = data.sort((a, b) => b.wpm - a.wpm);
    const top10Records = sortedData.slice(0, 20);

    console.log("Records:", data);
    return top10Records;
  } catch (error) {
    console.error("Error fetching records:", error);
    return [];
  }
}
