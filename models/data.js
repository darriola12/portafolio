const pool = require("../database/")

/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassifications(){
    return await pool.query("SELECT * FROM public.account_info ORDER BY account_name")
}

async function getForm(account_name, account_email, account_subject, account_message) {
  try {
      const sql = "INSERT INTO public.account_info (account_name, account_email, account_subject, account_message) VALUES ($1, $2, $3, $4) RETURNING *";
      return await pool.query(sql, [account_name, account_email, account_subject, account_message]);
  } catch (error) {
      return error.message;
  }
}

module.exports = { getClassifications, getForm };