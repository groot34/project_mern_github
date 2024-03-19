export const explorePopularRepos = async(req,res)=>{
    const {language}=req.params;

    try{
        const response = await fetch(
            `https://api.github.com/search/repositories?q=query:${language}&sort=star&order=desc&per_page=25`,
            {
              headers: {
                authorization:`token ${process.env.GITHUB_API_KEY}`,
              },
            }
          );
          const data = await response.json();//IMP

          res.status(200).json({repos: data.items})
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}