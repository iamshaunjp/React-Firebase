import { useReducer, useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {success: false, isPending: true, error: null, document: null}
    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = projectFirestore.collection(collection)

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }
  
  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" })

    try {
      const addedDocument = await ref.add({...doc, createdAt })
      dispatchIfNotCancelled({ type: "ADDED", document: addedDocument })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", error: err })
    }

  }

  // delete a document
  const deleteDocument = async (doc) => {

  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, response }

}