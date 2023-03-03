import { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const useFirebase = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", "FDgMLr2d5VF4npkR4QIm");
    getDoc(docRef).then(ds => { console.log("snapshot", ds);
      if(ds.exists()) {
        const newItem = {
          id: ds.id, 
          ...ds.data()
        }
        setItem(newItem);
      }
  });
  }, []);
  console.log(item);
  return item;
};

export default useFirebase;