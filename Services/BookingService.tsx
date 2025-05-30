import { db } from "./FireBaseService";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Add a new appointment
export const addBooking = async (userId, service, date, time) => {
  try {
    const docRef = await addDoc(collection(db, "bookings"), {
      userId,
      service,
      date,
      time,
      status: "pending",
    });
    console.log("Booking added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding booking:", error);
  }
};

// Get all bookings
export const getBookings = async () => {
  const querySnapshot = await getDocs(collection(db, "bookings"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
