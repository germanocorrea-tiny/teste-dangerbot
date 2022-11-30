import { danger } from "danger"

// Add a CHANGELOG entry for app changes
const hasChangelog = danger.git.modified_files.includes("README.md")

if (hasChangelog) {
  warn("Teste")
}