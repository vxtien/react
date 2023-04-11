const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imgageSize: 90,
};

const Profile = () => {
    return(
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of' + user.name}
                style={{
                    width: user.imgageSize,
                    height: user.imgageSize
                }}
            />
        </>
    )
}

export default Profile;