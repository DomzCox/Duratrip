import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { logger } from "firebase-functions";

import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin
admin.initializeApp();
//const db = getFirestore();



export const newRouteAdded = onDocumentCreated("Trips/{tripId}", (event) => {
    const docData = event.data?.data(); // Extract the document data
    const docId = event.params.tripId;  // Get the document ID

    if (!docData) {
        logger.error("No data found in the new document.");
        return;
    }

    // Log the extracted document details
    logger.info(`🚀 New route added!`, {
        tripId: docId,
        data: docData,
        timestamp: new Date().toISOString()
    });

    return {
        success: true,
        message: "New route successfully logged!",
        tripId: docId,
        data: docData
    };
});
