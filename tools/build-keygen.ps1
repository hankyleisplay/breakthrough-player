$ErrorActionPreference = "Stop"

$scriptPath = Join-Path $PSScriptRoot "generate-license-key.js"
$outputPath = Join-Path $PSScriptRoot "generate-license-key.exe"

if (-not (Test-Path $scriptPath)) {
  throw "Cannot find $scriptPath"
}

npx pkg "$scriptPath" --targets node18-win-x64 --output "$outputPath"
Write-Host "Built: $outputPath"
