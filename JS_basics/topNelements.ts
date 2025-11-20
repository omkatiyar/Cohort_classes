/*
Write a function that returns the top 3 most common tags per day, across all posts.
const posts = [
  { id: "1", date: "2025-07-01", tags: ["fitness", "motivation"] },
  { id: "2", date: "2025-07-01", tags: ["fitness"] },
  { id: "3", date: "2025-07-01", tags: ["wellness", "yoga", "motivation", "health"] },
  { id: "4", date: "2025-07-02", tags: ["travel", "photography"] },
  { id: "5", date: "2025-07-02", tags: ["travel", "sunset", "nature"] },
  { id: "6", date: "2025-07-02", tags: ["camping", "adventure"] },
{ id: "7", date: "2025-07-02", tags: ["photography", "travel", "wildlife", "adventure"] },
  { id: "8", date: "2025-07-03", tags: ["food", "recipes", "cooking"] },
  { id: "9", date: "2025-07-03", tags: ["dessert", "baking"] },
  { id: "10", date: "2025-07-03", tags: ["cooking", "recipes"] },
];
*/

type Post ={
    id: string;
    date: string;
    tags: string[];
}


const posts :Post[] = [
  { id: "1", date: "2025-07-01", tags: ["fitness", "motivation"] },
  { id: "2", date: "2025-07-01", tags: ["fitness"] },
  { id: "3", date: "2025-07-01", tags: ["wellness", "yoga", "motivation", "health"] },
  { id: "4", date: "2025-07-02", tags: ["travel", "photography"] },
  { id: "5", date: "2025-07-02", tags: ["travel", "sunset", "nature"] },
  { id: "6", date: "2025-07-02", tags: ["camping", "adventure"] },
{ id: "7", date: "2025-07-02", tags: ["photography", "travel", "wildlife", "adventure"] },
  { id: "8", date: "2025-07-03", tags: ["food", "recipes", "cooking"] },
  { id: "9", date: "2025-07-03", tags: ["dessert", "baking"] },
  { id: "10", date: "2025-07-03", tags: ["cooking", "recipes"] },
];

function toISODateFormat(datestr:string):string{
    
    const [day,month,year] = datestr.split("-");
    return `${year}-${month}-${day}`;
}

function getTopPostsPerDay(posts: Post[], topN:number = 3, startDate: string, endDate:string){
    const tagCountByDate: Record<string,Record<string,number>>={};
    
    for (const post of posts){
        if(post.date>=startDate && post.date<=endDate){

        if(!tagCountByDate[post.date]){
            tagCountByDate[post.date] ={};
        }
        for(const tag of post.tags){
            tagCountByDate[post.date][tag]= (tagCountByDate[post.date][tag] || 0)+1; 
        }
        }
    }

    const result : Record<string,string[]>={};
    const getDateRange = (start:String,end: string): string[] =>{
        const dates:string[] = [];
        let current =new Date(startDate);
        const last = new Date(endDate);
        while(current<=last){
            const iso= current.toISOString().split("T")[0];
            dates.push(iso);
            current.setDate(current.getDate()+1);
        }
        return dates;
    }
    const allDates = getDateRange(startDate,endDate);

    for(const date of allDates){
        if(tagCountByDate[date]){
            const sortedTags = Object.keys(tagCountByDate[date])
            .map((tag) => [tag,tagCountByDate[date][tag]] as
            [string,number])
            .sort((a,b) => b[1] - a[1])
            .slice(0,topN).map(([tag]) => tag);
            result[date] = sortedTags;
        }
        else
        result[date] = [];
    }
    return result;
}
console.log(getTopPostsPerDay(posts,3,"02-07-2025", "03-07-2025")); 











