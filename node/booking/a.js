// function buildFilterQuery(query = {}){
//
//     const filterQuery = {};
//     const ageFilter = {};
//
//     if (query.age_gte){
//         ageFilter.$gte = Number(query.age_gte);
//     }
//
//     if (query.age_lte){
//         ageFilter.$lte = Number(query.age_lte);
//     }
//
//     const x ={
//         $gte: 20,
//         $lte: 30
//     }
//
//     if (Object.keys(ageFilter).length){
//         filterQuery.age = ageFilter;
//     }
//
//     console.log(filterQuery);
// }
//
// buildFilterQuery({age_lte: 30, age_gte: 20});
// buildFilterQuery({age_gte: 30});
// buildFilterQuery({age_lte: 30});