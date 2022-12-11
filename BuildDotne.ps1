Push-Location CertDaddy
dotnet publish CertDaddy\CertDaddy.csproj -r win10-x64 -p:PublishSingleFile=true -p:IncludeAllContentForSelfExtract=true -p:IncludeNativeLibrariesForSelfExtract=true --self-contained false -c Release -p:Version=1.0.0 -o CertDaddyBuilds/Windows
