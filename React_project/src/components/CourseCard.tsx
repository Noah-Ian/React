type CourseCardProps = {
    title: string;
    instructor: string;
    duration: number;
    completed: boolean;
}

function CourseCard({
    title,
    instructor,
    duration,
    completed,
}: CourseCardProps) {
    return (
        <>
        <h1>{title}</h1>
        <p>Instructor: {instructor}</p>
        <p>duration: {duration}</p>
        <p>Status: {completed? "Completed" : "In Progress"}</p>
        </>
    )
}

export default CourseCard