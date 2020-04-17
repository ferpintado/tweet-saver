const convertUsernameToLink = (text: string) => {
  const regex = /(^|[^@\w])@(\w{1,15})\b/g;
  const replace = '$1<a href="http://twitter.com/$2">@$2</a>';

  return text.replace(regex, replace);
};

export default convertUsernameToLink;
