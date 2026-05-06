# Teleprompter - Create Executable Script
# This script creates a standalone .exe from the batch launcher

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Teleprompter - Create .exe File" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "⚠️  This script needs to run as Administrator to install ps2exe" -ForegroundColor Yellow
    Write-Host "   Right-click PowerShell and select 'Run as Administrator', then run this script again" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Check if ps2exe is installed
Write-Host "Checking for ps2exe module..." -ForegroundColor Yellow

if (-not (Get-Module -ListAvailable -Name ps2exe)) {
    Write-Host "ps2exe not found. Installing..." -ForegroundColor Yellow

    try {
        Install-Module -Name ps2exe -Force -Scope CurrentUser -ErrorAction Stop
        Write-Host "✅ ps2exe installed successfully!" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Failed to install ps2exe: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host ""
        Write-Host "Alternative: Use Bat to Exe Converter instead" -ForegroundColor Yellow
        Write-Host "Download from: http://bat2exe.net/" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Press any key to exit..."
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        exit 1
    }
}
else {
    Write-Host "✅ ps2exe module found!" -ForegroundColor Green
}

Write-Host ""

# Get script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$batFile = Join-Path $scriptDir "Teleprompter.bat"
$exeFile = Join-Path $scriptDir "Teleprompter.exe"

# Check if bat file exists
if (-not (Test-Path $batFile)) {
    Write-Host "❌ Teleprompter.bat not found in current directory!" -ForegroundColor Red
    Write-Host "   Make sure you're running this script from the Teleprompter folder" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Convert bat to exe
Write-Host "Converting Teleprompter.bat to Teleprompter.exe..." -ForegroundColor Yellow
Write-Host ""

try {
    # Note: ps2exe doesn't directly convert .bat files, so we need to create a wrapper
    # Create a temporary PowerShell script that calls the batch file
    $tempPs1 = Join-Path $scriptDir "temp_wrapper.ps1"

    $wrapperContent = @"
# Teleprompter Launcher Wrapper
`$scriptDir = Split-Path -Parent `$MyInvocation.MyCommand.Path
`$batFile = Join-Path `$scriptDir "Teleprompter.bat"

if (Test-Path `$batFile) {
    Start-Process -FilePath `$batFile -WindowStyle Hidden
}
else {
    # Fallback: try to open index.html directly
    `$htmlFile = Join-Path `$scriptDir "index.html"
    if (Test-Path `$htmlFile) {
        Start-Process -FilePath `$htmlFile
    }
    else {
        [System.Windows.Forms.MessageBox]::Show("Teleprompter files not found!`n`nPlease ensure index.html is in the same folder as this executable.", "Teleprompter Error", [System.Windows.Forms.MessageBoxButtons]::OK, [System.Windows.Forms.MessageBoxIcon]::Error)
    }
}
"@

    Set-Content -Path $tempPs1 -Value $wrapperContent -Force

    # Convert to exe
    Invoke-ps2exe -inputFile $tempPs1 -outputFile $exeFile -noConsole -title "Teleprompter" -description "Teleprompter Application" -company "Open Source" -version "1.0.0.0"

    # Clean up temp file
    Remove-Item $tempPs1 -Force

    if (Test-Path $exeFile) {
        Write-Host "✅ SUCCESS! Teleprompter.exe created!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Location: $exeFile" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "You can now:" -ForegroundColor Yellow
        Write-Host "  • Double-click Teleprompter.exe to launch" -ForegroundColor White
        Write-Host "  • Copy it to your Desktop" -ForegroundColor White
        Write-Host "  • Share it with friends (include index.html in same folder)" -ForegroundColor White
        Write-Host ""
    }
    else {
        throw "Executable was not created"
    }
}
catch {
    Write-Host "❌ Failed to create executable: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternative: Use Bat to Exe Converter instead" -ForegroundColor Yellow
    Write-Host "Download from: http://bat2exe.net/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
