import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { VideosInfo } from "./VideoTyping";

interface DataContextType {
  title: string;
  desc: string;
  stage: string;
  link: string;
  videoStore: VideosInfo[];
  setLessonTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
  setYoutubeLink: React.Dispatch<React.SetStateAction<string>>;
  setVideoStore: React.Dispatch<React.SetStateAction<VideosInfo[]>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Key to use in localStorage
const LOCAL_STORAGE_KEY = "myApp.videos";

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setLessonTitle] = useState<string>("");
  const [desc, setDescription] = useState<string>("");
  const [stage, setLevel] = useState<string>("");
  const [link, setYoutubeLink] = useState<string>("");

  // Load initial value from localStorage or default to empty array
  const [videoStore, setVideoStore] = useState<VideosInfo[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Save videoStore to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(videoStore));
    } catch {
      // Handle write errors if needed
    }
  }, [videoStore]);

  // Optional: You can also persist other states if needed, same idea applies

  return (
    <DataContext.Provider
      value={{
        title,
        desc,
        stage,
        link,
        videoStore,
        setLessonTitle,
        setDescription,
        setLevel,
        setYoutubeLink,
        setVideoStore,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};
