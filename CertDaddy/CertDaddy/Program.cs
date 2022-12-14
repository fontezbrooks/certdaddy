using ElectronCgi.DotNet;
using Microsoft.Extensions.Logging;

var connection = new ConnectionBuilder()
				.WithLogging(minimumLogLevel: LogLevel.Trace, 
							logFilePath: "electron-cgi.log")
				.Build();
            
connection.On<string, string>("greeting", name => "Hello " + name);
            
connection.Listen();   