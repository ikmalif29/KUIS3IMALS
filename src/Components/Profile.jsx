function Profile(){
    const profileSaya = {
        nama : "imals",
        foto  : "data:image/jpeg;base64,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",
        ttg : "29 september 2004",
        tempat : "UjungBarang, Majenang , Cilacap , Jawa tengah"
    }
    return(
        <>
            <div className="container">
                <h1>{profileSaya.nama}</h1>
                <img src={profileSaya.foto} alt="" className="img"/>
                <p>{profileSaya.ttg}</p>
                <p>{profileSaya.tempat}</p>
            </div>
        </>
    )
}

export default Profile;