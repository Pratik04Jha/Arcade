import { db } from "./firebase"
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore"

export const addFavorite = async ({ userId, gameId, gameTitle, gameDescription, imageSrc }) => {
  const favRef = collection(db, "favorites")

  // check if already added
  const q = query(favRef, where("userId", "==", userId), where("gameId", "==", gameId))
  const existing = await getDocs(q)

  if (!existing.empty) return { message: "Already in favorites", success: false }

  await addDoc(favRef, {
    userId,
    gameId,
    gameTitle,
    gameDescription,
    imageSrc,
    timestamp: Date.now(),
  })

  return { message: "Added to favorites", success: true }
}

export const removeFavorite = async (userId, gameId) => {
  const favRef = collection(db, "favorites")
  const q = query(favRef, where("userId", "==", userId), where("gameId", "==", gameId))
  const snapshot = await getDocs(q)

  if (snapshot.empty) return { message: "Not in favorites", success: false }

  // Delete the document
  const docToDelete = snapshot.docs[0]
  await deleteDoc(doc(db, "favorites", docToDelete.id))

  return { message: "Removed from favorites", success: true }
}

export const getFavorites = async (userId) => {
  const favRef = collection(db, "favorites")
  const q = query(favRef, where("userId", "==", userId))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export const isFavorited = async (userId, gameId) => {
  const favRef = collection(db, "favorites")
  const q = query(favRef, where("userId", "==", userId), where("gameId", "==", gameId))
  const snapshot = await getDocs(q)

  return !snapshot.empty
}
