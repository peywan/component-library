import { Badge } from "flowbite-react";

const Badges = () => {
    const styles = {
        color : color,
        size: size,
        icon: icon,
    }
    return (
        <div>
            <Badge color="info">Default</Badge>
            <Badge color="gray">Dark</Badge>
            <Badge color="failure">Failure</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="indigo">Indigo</Badge>
        </div>
    )
}
export default Badges
