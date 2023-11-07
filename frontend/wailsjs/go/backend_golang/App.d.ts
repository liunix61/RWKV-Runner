// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {backend_golang} from '../models';

export function AddToDownloadList(arg1:string,arg2:string):Promise<void>;

export function ContinueDownload(arg1:string):Promise<void>;

export function ConvertData(arg1:string,arg2:string,arg3:string,arg4:string):Promise<string>;

export function ConvertModel(arg1:string,arg2:string,arg3:string,arg4:string):Promise<string>;

export function ConvertSafetensors(arg1:string,arg2:string,arg3:string):Promise<string>;

export function CopyFile(arg1:string,arg2:string):Promise<void>;

export function DeleteFile(arg1:string):Promise<void>;

export function DepCheck(arg1:string):Promise<void>;

export function DownloadFile(arg1:string,arg2:string):Promise<void>;

export function FileExists(arg1:string):Promise<boolean>;

export function GetPlatform():Promise<string>;

export function GetPyError():Promise<string>;

export function InstallPyDep(arg1:string,arg2:boolean):Promise<string>;

export function IsPortAvailable(arg1:number):Promise<boolean>;

export function ListDirFiles(arg1:string):Promise<Array<backend_golang.FileInfo>>;

export function MergeLora(arg1:string,arg2:boolean,arg3:number,arg4:string,arg5:string,arg6:string):Promise<string>;

export function OpenFileFolder(arg1:string,arg2:boolean):Promise<void>;

export function OpenOpenFileDialog(arg1:string):Promise<string>;

export function OpenSaveFileDialog(arg1:string,arg2:string,arg3:string):Promise<string>;

export function OpenSaveFileDialogBytes(arg1:string,arg2:string,arg3:Array<number>):Promise<string>;

export function PauseDownload(arg1:string):Promise<void>;

export function ReadFileInfo(arg1:string):Promise<backend_golang.FileInfo>;

export function ReadJson(arg1:string):Promise<any>;

export function RestartApp():Promise<void>;

export function SaveJson(arg1:string,arg2:any):Promise<void>;

export function StartServer(arg1:string,arg2:number,arg3:string,arg4:boolean,arg5:boolean):Promise<string>;

export function StartWebGPUServer(arg1:number,arg2:string):Promise<string>;

export function UpdateApp(arg1:string):Promise<boolean>;

export function WslCommand(arg1:string):Promise<void>;

export function WslEnable(arg1:boolean):Promise<void>;

export function WslInstallUbuntu():Promise<void>;

export function WslIsEnabled():Promise<void>;

export function WslStart():Promise<void>;

export function WslStop():Promise<void>;
