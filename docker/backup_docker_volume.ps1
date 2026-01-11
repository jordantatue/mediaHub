. "$PSScriptRoot\backup_config.ps1"

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupFileName = "${VolumeName}_backup_${timestamp}.tar.gz"
New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null

docker run --rm -v "$VolumeName:/volume" -v "$BackupDir:/backup" alpine tar czf "/backup/$backupFileName" -C /volume .
if ($LASTEXITCODE -ne 0) { throw "Backup failed" }
Write-Host "Backup OK: $BackupDir\$backupFileName"
