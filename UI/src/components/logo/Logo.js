import ExtensionIcon from '@mui/icons-material/Extension';

function Logo({className}) {
    return (
        <div className={'flex gap-2 font-bold text-primary items-center ' + className}>
          <ExtensionIcon fontSize='inherit'></ExtensionIcon>
          <h1>MICRO-FW</h1>
        </div>
    )
}
export default Logo;