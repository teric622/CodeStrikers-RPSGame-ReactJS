


const bgcCol="blue"
const bgCol = '#ededed'
const bgCombo = bgCol + bgcCol
export const Container = {
  fontWeight: '400',
};
export const FormContainer = {
  textAlign: 'center',
  margin: '0 0',
};
// the box as a whole
export const FormSection = {
  position: 'relative',
  marginBottom: '20px',
  backgroundColor: '#ffff',
  padding: '35px 40px',
  textAlign: 'left',
  display: 'inline-block',
  minWidth: '380px',
  borderRadius: '6px',
  boxShadow: '1px 1px 4px 0 rgba(0,0,0,0.15)',
  boxsizing: "border-box",
};


// FormField = Space between username and password boxes
export const FormField = {
  marginBottom: '80px',
};
// "Sign in to your account" = sectionHeader
export const SectionHeader = {
  color: '#f47d26',
  marginTop: '35px',
  marginBottom: '15px',
  fontSize: '18px',
  fontWeight: '500',
  fontfamily: 'sans-serif',
};
//space between "Forgot your password and "No account? Create account"
export const SectionBody = {
  marginBottom: '20px',
};
//fontsize of the text alllll the way at the bottom
export const SectionFooter = {
  fontSize: '14px',
  color: '#495057',
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
  fontfamily: 'sans-serif',
};
//word location inside txtbox topbox
export const SectionFooterPrimaryContent = {
  marginLeft: 'center',
};
//word location inside password box
export const SectionFooterSecondaryContent = {
  marginRight: 'auto',
  alignSelf: 'center',
};
//username and password boxes
export const Input = {
  display: 'block',
  width: '90%',
  padding: '25px',
  fontSize: '16px',
  fontfamily: 'sans-serif',
  color: '#495057',
  backgroundColor: '#fff',
  backgroundImage: 'none',
  border: '2px solid  #f47d26',
  borderRadius: '2px',
  boxSizing: 'border-box',
  marginBottom: '10px',
};
// sign in button
export const Button = {
  display: 'inline-block',
  marginBottom: '0',
  fontSize: '12px',
  fontfamily: 'sans-serif',
  fontWeight: 800,
  borderRadius: '0.25em',
  lineHeight: '1.42857143',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundImage: 'none',
  color: '#fff',
  backgroundColor: ' #f47d26',
  borderColor: '#ccc',
  textTransform: 'uppercase',
  padding: '1em 1em',
  letterSpacing: '1.1px',
  border: 'none',
};
//
export const SignInButton = {
  position: 'relative',
  width: '100%',
  borderRadius: '4px',
  marginBottom: '10px',
  cursor: 'pointer',
  padding: 0,
  fontfamily: 'sans-serif',
  color: '#fff',
  fontSize: '14px',
  '#google_signin_btn': {
    backgroundColor: '#4285F4',
    fontFamily: 'Roboto',
    border: '1px solid #4285F4',
  },
  '#facebook_signin_btn': {
    backgroundColor: '#4267B2',
    borderColor: '#4267B2',
  },
  '#amazon_signin_btn': {
    backgroundColor: '#2673B6',
    border: 'none',
  },
};
export const SignInButtonIcon = {
  position: 'absolute',
  left: 0,
  '#google_signin_btn_icon': {
    backgroundColor: '#fff',
    borderRadius: '4px 0 0 4px',
    height: '30px',
    width: '30px',
    padding: '11px',
  },
  '#facebook_signin_btn_icon': {
    height: '33px',
    width: '18px',
    padding: '10px 14px',
  },
  '#amazon_signin_btn_icon': {
    padding: '10px',
    height: '32px',
    width: '32px',
  },
};
export const SignInButtonContent = {
  display: 'block',
  padding: '18px 0',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
};
export const Strike = {
  width: '100%',
  textAlign: 'center',
  borderBottom: '1px solid #bbb',
  lineHeight: '0.1em',
  margin: '32px 0',
  color: '#828282',
};
export const StrikeContent = {
  background: '#fff',
  padding: '0 25px',
  fontSize: '14px',
  fontWeight: '500',
  fontfamily: 'sans-serif',
};
export const ActionRow = {
  marginBottom: '15px',
};
export const FormRow = {
  marginBottom: '12px',
};
export const A = {
  color: '#2673B6',
  cursor: 'pointer',
};
export const Hint = {
  color: '#828282',
  fontSize: '12px',
};
export const Radio = {
  marginRight: '18px',
  verticalAlign: 'bottom',
};
export const InputLabel = {
  color: '#495057',
  fontSize: '14px',
  marginBottom: '8px',
  fontfamily: 'sans-serif',
};




const MyAmplifyTheme = {
  container: Container,
  formContainer: FormContainer,
  formSection: FormSection,
  formField: FormField,
  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  sectionFooterPrimaryContent: SectionFooterPrimaryContent,
  sectionFooterSecondaryContent: SectionFooterSecondaryContent,
  input: Input,
  button: Button,
  signInButton: SignInButton,
  signInButtonIcon: SignInButtonIcon,
  signInButtonContent: SignInButtonContent,
  formRow: FormRow,
  strike: Strike,
  strikeContent: StrikeContent,
  actionRow: ActionRow,
  a: A,
  hint: Hint,
  radio: Radio,
  inputLabel: InputLabel,
};
export default MyAmplifyTheme;