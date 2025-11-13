async function initSearch(){
    const {posts}=await loadSiteData();
    const box=document.getElementById("search-box");
    const result=document.getElementById("search-result");

    box.addEventListener("input",()=>{
        const q=box.value.trim().toLowerCase();
        if(!q){ result.innerHTML=""; return; }

        const found=posts.filter(p=>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.tags.some(t=>t.toLowerCase().includes(q))
        );

        result.innerHTML=found.map(p=>`
            <div class="item">
                <a href="${p.url}">${p.title}</a>
                <br><small>${p.category} · ${p.tags.join("/")}</small>
            </div>
        `).join("");
    });
}

document.addEventListener("DOMContentLoaded",initSearch);
