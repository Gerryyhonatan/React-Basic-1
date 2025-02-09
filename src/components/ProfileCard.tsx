type ProfileCardProps = {
    name?: string;
    year: number;
    job?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
    const {name = "Anonymus", year, job} = props;
    return (
        <div className="card">
            <p>Name : {name}</p>
            <p>Birthday : {year}</p>
            {props.job ? <p>Job : {job}</p> : null}
        </div>
    )
}

export default ProfileCard;