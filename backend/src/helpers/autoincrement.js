import { connect } from "../../db/connection.js";

export default async function siguienteId(collection){
    let db = await connect();
    let counter = db.collection("counters");
    const secuencesValues = await counter.findOneAndUpdate(
        { counter: `${collection}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return secuencesValues.value.sequence_value;
};