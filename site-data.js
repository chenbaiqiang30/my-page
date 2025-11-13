async function loadSiteData() {
    const res = await fetch("rename-map.json");
    const mapping = await res.json();

    const posts = Object.keys(mapping).map(oldName=>{
        const newName = mapping[oldName];
        const title = decodeURIComponent(newName.replace(".html","").replace(/_/g," "));

        let category="其他";
        if(/AI|智能|Agent|提示词/i.test(title)) category="AI";
        if(/财经|投资|风向|趋势/.test(title)) category="财经";
        if(/商业|品牌|零售/.test(title)) category="商业";
        if(/教育|学习/.test(title)) category="教育";

        const tags = title.split(/[\s_·、]+/).filter(t=>t.length>1);

        return{title,url:newName,category,tags};
    });

    return {posts};
}
