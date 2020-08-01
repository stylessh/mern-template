import { connect } from "mongoose";
import { keys } from './config/keys'

connect(keys.db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(() => console.log('db is connected'))
    .catch(err => console.error(err))
