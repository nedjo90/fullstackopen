const Notification = ({message}) =>
{
    if (message.message === '')
        return null;
    return (
        <div className={`${message.isSuccess ? 'success' : 'error'}`}>
            {message.message}
        </div>
    )
}

export default Notification;