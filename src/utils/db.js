export const getAllReports = async () => { 
  try {
    const response = await dbClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('Report'))),
        q.Lambda(x => q.Get(x))
      )
    )
    // return response;
    return response;
  } catch (error) {
    console.log('error', error);
    alert('Something went wrong');
  }
}