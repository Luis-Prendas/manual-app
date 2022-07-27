import {connect} from "mongoose";

const connectMongo = async () => connect("mongodb+srv://simil:simil455654701@cluster0.9biew.mongodb.net/?retryWrites=true&w=majority")

export default connectMongo